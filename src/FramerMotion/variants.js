export const fadeIn = (direction, delay)=>{
    return{
        hidden:{
            y:direction ==='up' ? 70 : direction === 'down' ? -60: 0,
            x:direction ==='left' ? 20 : direction === 'right' ? -20: 0,
        },
        show: {
            y: 0,
            x : 0,
            opacity : 1,
            transition: {
                type: 'tween',
                duration:0.5,
                delay: delay,
                ease: [0.25,0.25,0.25,0.5]
            }
        }
    }
}