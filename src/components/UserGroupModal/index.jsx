import { useContext } from 'react';
import { Overlay, ModalContainer, Input, Button, ConteinerButton, Select } from './styles';

import { UsersContext } from '../../context/usersContext';
import { GroupsContext } from '../../context/groupsContext';

export function UserGroupModal({
  visible,
  onClose,
  onSubmit,
  values,
  setValues,
  fieldsConfig,
  disabledKeys = []
}) {
  const { users } = useContext(UsersContext);
  const { groups } = useContext(GroupsContext);

  if (!visible || !values) return null;

  const getOptions = (source) => {
    switch (source) {
      case 'users':
        return Array.isArray(users?.rows) ? users.rows.map((obj) => obj.user) : [];
      case 'groups':
        return Array.isArray(groups?.rows) ? groups.rows.map((f) => f.group) : [];
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