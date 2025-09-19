import { useContext } from 'react';
import { Overlay, ModalContainer, Input, Button, ConteinerButton, Select } from './styles';

import { ObjectsContext } from '../../context/objectsContext';
import { FieldsContext } from '../../context/fieldsContext';

export function ObjectFieldModal({
  visible,
  onClose,
  onSubmit,
  values,
  setValues,
  fieldsConfig,
  disabledKeys = []
}) {
  const { objects } = useContext(ObjectsContext);
  const { fields } = useContext(FieldsContext);

  if (!visible || !values) return null;

  const getOptions = (source) => {
    switch (source) {
      case 'objects':
        return Array.isArray(objects?.rows) ? objects.rows.map((obj) => obj.object) : [];
      case 'fields':
        return Array.isArray(fields?.rows) ? fields.rows.map((f) => f.field) : [];
      default:
        return [];
    }
  };


  const handleChange = (key, value) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleConfirm = () => {
    const requiredKeys = Object.keys(fieldsConfig).filter((key) => disabledKeys.includes(key));
    const isValid = requiredKeys.every((key) => values[key]?.trim());
    if (isValid) onSubmit(values);
  };

  return (
    <Overlay>
      <ModalContainer>
        <h2>{disabledKeys.length ? 'Editar vínculo' : 'Adicionar vínculo'}</h2>

        {Object.entries(fieldsConfig).map(([key, config]) => {
          const isDisabled = disabledKeys.includes(key);
          const label = config.label || key;
          const options = config.type === 'select' ? getOptions(config.source) : [];

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
                  {options.map((opt) => (
                    <option key={opt} value={opt}>
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