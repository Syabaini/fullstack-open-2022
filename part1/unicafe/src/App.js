import React from "react";
import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;
const Statistics = ({
  goodValue,
  neutralValue,
  badValue,
  totalValue,
  averangeValue,
}) => {
  if (totalValue === 0) {
    return (
      <div>
        <p>No Feedback Given</p>
      </div>
    );
  }
  return (
    <div>
      <h1>Statictic</h1>
      <StatisticLine text="good" value={goodValue} />
      <StatisticLine text="neutral" value={neutralValue} />
      <StatisticLine text="bad" value={badValue} />
      <StatisticLine text="total" value={totalValue} />
      <StatisticLine text="averange" value={averangeValue} />
    </div>
  );
};
const StatisticLine = ({ text, value }) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{text}</td>
            <td>{value}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const hadleClicksGood = () => {
    setGood(good + 1);
  };
  const hadleClicksNeutral = () => {
    setNeutral(neutral + 1);
  };
  const hadleClicksBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>GIVE FEEDBACK</h1>
      <Button onClick={hadleClicksGood} text="good" />
      <Button onClick={hadleClicksNeutral} text="neutral" />
      <Button onClick={hadleClicksBad} text="bad" />
      <Statistics
        goodValue={good}
        neutralValue={neutral}
        badValue={bad}
        totalValue={good + neutral + bad}
        averangeValue={good + neutral + bad / 3}
      />
    </div>
  );
};

export default App;
