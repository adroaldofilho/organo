import PropTypes from 'prop-types';
import './CampoTexto.css'

const CampoTexto = (props) => {
    const placeholderModificada = `${props.placeholder}...` 

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input onChange={aoDigitado} value={props.valor} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

CampoTexto.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
};

export default CampoTexto
