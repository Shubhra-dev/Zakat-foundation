function SummaryGiveZakat() {
  return (
    <div className="py-[5%]">
      <h2 className="text-secondary font-semibold text-h3 sm:text-s1 laptop:text-title font-pally pb-4 text-center">
        Contribute your Zakat through AL-ZAKATI
      </h2>
      <p className="w-5/6 m-auto text-center font-normal text-s3 sm:text-paragraph laptop:text-s2 text-secondary/80 pb-2 sm:pb-6">
        Your Zakat is more than just a donation—it’s a lifeline for those in
        need. By contributing through AL-ZAKATI, you play a vital role in
        providing essential support to Muslims who are struggling to meet their
        basic needs.
      </p>
      <p className="w-5/6 m-auto text-center font-normal text-s3 sm:text-paragraph laptop:text-s2 text-secondary/80">
        Your Zakat helps us deliver:
      </p>
      <ul className="list-disc list-inside w-11/12 laptop:w-4/5 m-auto font-normal text-s3 sm:text-paragraph laptop:text-s2 text-secondary/80 pb-[3%] space-y-2 pt-2">
        <li>
          <span className="text-bold text-black">Life-Saving Essentials: </span>
          Food, clean water, clothing, and shelter for families facing hardship.
        </li>
        <li>
          <span className="text-bold text-black">Empowerment Programs: </span>
          Vocational training, education, and resources to help individuals
          build a better future
        </li>
        <li>
          <span className="text-bold text-black">Community Leadership: </span>
          Support for religious leaders and community champions who are working
          tirelessly to uplift their communities.
        </li>
      </ul>
      <p className="w-5/6 m-auto text-center font-normal text-s3 sm:text-paragraph laptop:text-s2 text-secondary/80 py-2">
        With our innovative ZakaTracker tool, you can stay informed every step
        of the way. Receive real-time updates on how and when your Zakat is
        distributed.
      </p>
    </div>
  );
}

export default SummaryGiveZakat;
