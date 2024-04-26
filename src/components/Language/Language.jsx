import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useTranslation } from 'react-i18next';
import './Language.scss'
const Language = (props) => {
    const { show, setShow } = props
    const { i18n, t } = useTranslation();
    const handleClose = () => setShow(false);
    const options = [
        { value: 'vi', label: 'Tiếng Việt' },
        { value: 'en', label: 'English' },
    ];
    const handleChangeSelect = (selectedOption) => {
        if (selectedOption) {
            i18n.changeLanguage(selectedOption.value);
        }
    }
    return (
        <Modal show={show} onHide={handleClose} backdrop={'static'}>
            <Modal.Header closeButton>
                <Modal.Title>{t(`language.name`)}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="modal_language">
                    <div className="form-group">
                        {
                            options.map((value, index) => {
                                return (
                                    <div className="form-item col-3 d-flex gap-1" key={index}>
                                        <input type='checkbox' id={index} value={value.value} checked={value.value === i18n.language ? true : false} onChange={() => handleChangeSelect(value)} />
                                        <label htmlFor={index}>{value.label}</label>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    {t(`language.close`)}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Language