type dateReturn = {
    hour: string,
    day: string,
}

const weekDays = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];

const yearMonths = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

const formatZero = (value: number)=>{
    if(value < 10){
        return `${'0' + value.toString()}`;
    } else {
        return value;
    }
}

export function getDate(): dateReturn{

    const date = new Date();
    
    const hours = date.getHours();
    const minuts = date.getMinutes();
    const seconds = date.getSeconds();
    const dayOfWeek = weekDays[date.getDay()]
    const monthDay = date.getDate();
    const month = yearMonths[date.getMonth()];
    const hour = `${formatZero(hours)}:${formatZero(minuts)}:${formatZero(seconds)}`;
    const day = `${dayOfWeek}, ${monthDay} de ${month}`;

    return {hour, day};
}