// below, we're giving types to the parameters but then we are also giving a
// type to the value being returned as number
const add = (a: number, b: number): number => {
    return a + b;
};
// here's an example of why to not just let types be inferred for functions
// where a return is expected. we wanted a number returned, but forgot to
// use the return keyword, and that infers the function value is void
const subtract = (a: number, b: number) => {
    a - b;
};

function divide(a: number, b: number): number {
    return a / b;
}

const multiply = function (a: number, b: number): number {
    return a * b;
};

const logger = (message: string): void => {
    console.log(message);
    return undefined;
};

// never can be used to show that the function will never return anything ever
const throwError = (message: string): never => {
    throw new Error(message);
};

const todaysForecast = {
    date: new Date(),
    weather: 'sunny',
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
    console.log(forecast.date);
    console.log(forecast.weather);
};

logWeather(todaysForecast);

const weatherLog = ({ date, weather }: { date: Date; weather: string }) => {
    console.log(date);
    console.log(weather);
};

weatherLog(todaysForecast);
