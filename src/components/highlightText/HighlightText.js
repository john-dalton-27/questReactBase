const Highlight = ({upperText, color}) => {
    return (
    <div>
        <p style={{ textTransform: upperText, color: color}}>Este é um parágrafo</p>
    </div>
    )
}

export default Highlight;