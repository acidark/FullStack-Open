const Listo = ({nmbs}) => {
    // const {name,number} = nmbs
    // console.log({name})
    // <ul>
    return(
    nmbs.map((n)=><li key={n.name}><div>{n.name} {n.number}</div></li>) 
    )
}

export default Listo