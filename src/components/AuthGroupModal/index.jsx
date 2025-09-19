import { useContext } from 'react';
import {
  Overlay,
  ModalContainer,
  Input,
  Button,
  ConteinerButton,
  Select
} from './styles';

import { GroupsContext } from '../../context/groupsContext';
import { ObjectsContext } from '../../context/objectsContext';
import { ObjectFieldContext } from '../../context/objectFieldContext';

export function AuthGroupModal({
  visible,
  onClose,
  onSubmit,
  values,
  setValues,
  fieldsConfig,
  disabledKeys = []
}) {
  const { groups } = useContext(GroupsContext);
  const { objects } = useContext(ObjectsContext);
  const { objectField } = useContext(ObjectFieldContext);

  if (!visible || !values) return null;

  const objectSelected = !!values.object?.trim();

  const getOptions = (source) => {
    switch (source) {
      case 'groups':
        return Array.isArray(groups?.rows)
          ? groups.rows.map((obj) => obj.group)
          : [];
      case 'objects':
        return Array.isArray(objects?.rows)
          ? objects.rows.map((obj) => obj.object)
          : [];
      case 'fields':
        if (!objectSelected) return [];
        return Array.isArray(objectField?.rows)
          ? objectField.rows
            .filter((item) => item.object === values.object)
            .map((item) => item.field)
          : [];
      default:
        return [];
    }
  };

  const handleChange = (key, value) => {
    setValues((prev) => ({
      ...prev,
      [key]: value,
      ...(key === 'object' ? { field: '' } : {})
    }));
  };

  const handleConfirm = () => {
    const requiredKeys = Object.keys(fieldsConfig).filter((key) =>
      disabledKeys.includes(key)
    );
    const isValid = requiredKeys.every((key) => values[key]?.trim());
    if (isValid) onSubmit(values);
  };

  return (
    <Overlay>
      <ModalContainer>
        <h2>{disabledKeys.length ? 'Editar vínculo' : 'Adicionar vínculo'}</h2>

        {Object.entries(fieldsConfig).map(([key, config]) => {
          const label = config.label || key;
          const options =
            config.type === 'select' ? getOptions(config.source) : [];

          const isDisabled =
            disabledKeys.includes(key) ||
            (key === 'field' && !objectSelected);

          return (
            <div key={key}>
              <label>{label}</label>
              {config.type === 'select' ? (
                <Select
                  value={values[key] || ''}
                  onChange={(e) => handleChange(key, e.target.value)}
                  disabled={isDisabled}
                >
                  <option value="">Selecione</option>
                  {options.map((opt, index) => (
                    <option key={`opt-${index}`} value={opt}>
                      {opt}
                    </option>
                  ))}
                </Select>
              ) : (
                <Input
                  type="text"
                  value={values[key] || ''}
                  onChange={(e) => handleChange(key, e.target.value)}
                  disabled={isDisabled}
                  placeholder={label}
                />
              )}
            </div>
          );
        })}

        <ConteinerButton>
          <Button onClick={onClose}>Cancelar</Button>
          <Button onClick={handleConfirm}>Confirmar</Button>
        </ConteinerButton>
      </ModalContainer>
    </Overlay>
  );
}