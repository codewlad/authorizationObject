import { Overlay, ModalContainer, Input, Button, ConteinerButton } from './styles';

export function AddModal({ visible, onClose, onSubmit, fields, values, setValues, disabledKeys = [], idKeys = [] }) {
  if (!visible || !values) return null;

  const handleChange = (key, value) => {
    setValues(prev => ({ ...prev, [key]: value }));
  };

  const handleConfirm = () => {
    const isValid = idKeys.every(key => values[key]?.trim());
    if (isValid) onSubmit(values);
  };

  return (
    <Overlay>
      <ModalContainer>
        <h2>{disabledKeys.length ? "Editar" : "Adicionar"}</h2>

        {fields.map((key) => (
          <Input
            key={key}
            type="text"
            placeholder={key}
            value={values[key] || ""}
            onChange={(e) => handleChange(key, e.target.value)}
            disabled={disabledKeys.includes(key)}
            id={key}
          />
        ))}

        <ConteinerButton>
          <Button onClick={onClose}>Cancelar</Button>
          <Button onClick={handleConfirm}>Confirmar</Button>
        </ConteinerButton>
      </ModalContainer>
    </Overlay>
  );
}