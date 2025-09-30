import { useState, useContext } from 'react';
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
import { AuthGroupContext } from '../../context/authGroupContext';
import { FieldsContext } from '../../context/fieldsContext';
import { AddModal } from '../AddModal';

export function AuthGroupModal({
  visible,
  onClose,
  onSubmit,
  values,
  setValues
}) {
  const { groups, addRow: addGroup } = useContext(GroupsContext);
  const { objects } = useContext(ObjectsContext);
  const { objectField } = useContext(ObjectFieldContext);
  const { authGroup } = useContext(AuthGroupContext);
  const { fields } = useContext(FieldsContext);

  const [step, setStep] = useState(1);
  const [addGroupModalOpen, setAddGroupModalOpen] = useState(false);
  const [newGroupData, setNewGroupData] = useState({ group: '', groupName: '' });

  if (!visible || !values) return null;

  const objectSelected = !!values.object?.trim();

  const handleChange = (key, value) => {
    setValues((prev) => ({
      ...prev,
      [key]: value,
      ...(key === 'object' ? { field: '' } : {})
    }));
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const getNextAuthId = () => {
    const authValues = authGroup?.rows?.map((row) => parseInt(row.auth, 10)) || [];
    const maxId = Math.max(0, ...authValues);
    return String(maxId + 1);
  };

  const handleConfirm = () => {
    const finalData = {
      ...values,
      auth: values.auth || getNextAuthId()
    };

    if (finalData.group && finalData.object && finalData.field && finalData.value) {
      onSubmit(finalData);
      setStep(1);
    }
  };

  const handleGroupSubmit = (data) => {
    addGroup(data);
    setValues((prev) => ({ ...prev, group: data.group }));
    setAddGroupModalOpen(false);
    setNewGroupData({ group: '', groupName: '' });
  };

  return (
    <>
      <Overlay>
        <ModalContainer style={{ height: '39rem' }}>
          <h2>Adicionar Grupo de Autorização</h2>
          <div style={{ height: '6px', background: '#a0a0a0', borderRadius: '3px', marginBottom: '1rem' }}>
            <div
              style={{
                width: `${(step / 3) * 100}%`,
                height: '100%',
                background: '#7c7c7c',
                borderRadius: '3px',
                transition: 'width 0.3s ease'
              }}
            />
          </div>

          {step === 1 && (
            <>
              <label>Informe um grupo existente</label>
              <Select
                value={values.group || ''}
                onChange={(e) => handleChange('group', e.target.value)}
              >
                <option value="">Selecione</option>
                {groups.rows.map((g) => (
                  <option key={g.group} value={g.group}>
                    {g.groupName}
                  </option>
                ))}
              </Select>

              <label>ou</label>

              <Button onClick={() => setAddGroupModalOpen(true)}>
                Criar novo grupo
              </Button>

              <ConteinerButton>
                <Button onClick={onClose}>Cancelar</Button>
                <Button onClick={nextStep} disabled={!values.group}>
                  Avançar
                </Button>
              </ConteinerButton>
            </>
          )}

          {step === 2 && (
            <>
              <label>Informe o Objeto de Autorização</label>
              <Select
                value={values.object || ''}
                onChange={(e) => handleChange('object', e.target.value)}
              >
                <option value="">Selecione</option>
                {objects.rows.map((o) => (
                  <option key={o.object} value={o.object}>
                    {o.objectName}
                  </option>
                ))}
              </Select>

              <ConteinerButton>
                <Button onClick={prevStep}>Voltar</Button>
                <Button onClick={nextStep} disabled={!values.object}>
                  Avançar
                </Button>
              </ConteinerButton>
            </>
          )}

          {step === 3 && (
            <>
              <label>Informe o Campo</label>
              <Select
                value={values.field || ''}
                onChange={(e) => handleChange('field', e.target.value)}
                disabled={!objectSelected}
              >
                <option value="">Selecione</option>
                {objectField.rows
                  .filter((f) => f.object === values.object)
                  .map((f) => {
                    const fieldInfo = fields.rows.find((field) => field.field === f.field);
                    const label = fieldInfo?.fieldName || f.field;
                    return (
                      <option key={f.field} value={f.field}>
                        {label}
                      </option>
                    );
                  })}
              </Select>

              <label>Informe o Valor</label>
              <Input
                value={values.value || ''}
                onChange={(e) => handleChange('value', e.target.value)}
                placeholder="Valor"
              />

              <ConteinerButton>
                <Button onClick={prevStep}>Voltar</Button>
                <Button
                  onClick={handleConfirm}
                  disabled={!values.field || !values.value}
                >
                  Confirmar
                </Button>
              </ConteinerButton>
            </>
          )}
        </ModalContainer>
      </Overlay>

      <AddModal
        visible={addGroupModalOpen}
        onClose={() => {
          setAddGroupModalOpen(false);
          setNewGroupData({ group: '', groupName: '' });
        }}
        onSubmit={handleGroupSubmit}
        fields={['group', 'groupName']}
        values={newGroupData}
        setValues={setNewGroupData}
        idKeys={['group']}
      />
    </>
  );
}