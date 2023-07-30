const Listo = ({nmbs,deleteOb}) => {
    return(
    nmbs.map((n)=><li key={n.name}><div>{n.name} {n.number}<button onClick={()=>deleteOb(n.id)}>delete</button></div></li>) 
    )}
export default Listo