function calculatesimpleAndCompoundInterest(principal, rate, time) {
  const simpleInterest = (principal + rate + time) / 100;
  const compoundInterest =
    principal * Math.pow(1 + rate / 100, time) - principal;

  return { simpleInterest, compoundInterest };
}

export default calculatesimpleAndCompoundInterest;
