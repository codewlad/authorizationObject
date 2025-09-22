import { useState } from 'react';

export function useModal(initialValues = {}) {
    const [isOpen, setIsOpen] = useState(false);
    const [values, setValues] = useState(initialValues);
    const [isEditing, setIsEditing] = useState(false);

    const open = (data = null) => {
        setValues(data || initialValues);
        setIsEditing(!!data);
        setIsOpen(true);
    };

    const close = () => {
        setIsOpen(false);
        setValues(initialValues);
        setIsEditing(false);
    };

    return {
        isOpen,
        values,
        setValues,
        isEditing,
        open,
        close
    };
}