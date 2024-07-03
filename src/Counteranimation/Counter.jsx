
import CountUp from "react-countup";

export default function counter({ number, title }) {
  return (
    <div className="number">
      <CountUp duration={2} className="counter" enableScrollSpy= "true" end={number} />
      <span>{title}</span>
    </div>
  );
}