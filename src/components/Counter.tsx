import classes from './Counter.module.scss'

export const Counter = () => {
    console.log('Компонент счетчика')
    return (
        <div className={classes.counter}>
            <h1>Компонент счетчика</h1>
        </div>
    );
};

