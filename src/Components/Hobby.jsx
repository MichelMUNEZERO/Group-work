const Hobby = ({hoobyData}) => {
    return (
    <div style={{border: "1px solid", width: "40%", marginInline: "auto", padding: "2rem"}}>
        <span style={{fontWeight: "700"}}>{hoobyData.title}</span>
        <p style={{fontSize: "14px", textAlign: "justify"}}>{hoobyData.description}</p>
    </div>
    );
}

export default Hobby;