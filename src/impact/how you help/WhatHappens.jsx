function WhatHappens() {
  return (
    <div className="pb-[2%] bg-primary px-[3%]">
      <h2 className="text-center w-4/5 m-auto text-secondary font-semibold text-[55px] font-pally pb-4">
        What happens next
      </h2>
      <p className="font-normal text-xl text-secondary/80 ">
        Once a person has applied to one of the funds using our online form, our
        team checks over all the information they have shared to find out if:
      </p>
      <ul className="px-[2%] list-disc font-normal text-xl text-secondary/80 py-4">
        <li>The person can be given Zakat</li>
        <li>The person is eligible for the grant they’ve applied for</li>
      </ul>
      <p className=" font-normal text-xl text-secondary/80 pb-[3%]">
        A decision will be made in a matter of days if all the information we
        need is provided, and we’ll then get in touch to let them know the
        decision. If we can help, the Zakat grant will either be paid straight
        into their bank account, or we’ll send them a voucher or pay one of our
        delivery partners directly if the person will benefit more from a
        non-cash grant.
      </p>
    </div>
  );
}

export default WhatHappens;
