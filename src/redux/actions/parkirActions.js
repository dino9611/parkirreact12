export const ParkirMobil=(data)=>{
    return{
        type:'MOBIL',
        payload:data
    }
}
export const ParkirMotor=(data)=>{
    return{
        type:'MOTOR',
        payload:data
    }
}
export const Reset=()=>{
    return{
        type:'BALIK'
    }
}