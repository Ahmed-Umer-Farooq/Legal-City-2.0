import { useState } from "react";

export default function MessageForm() {
  const [phoneCall, setPhoneCall] = useState(true);
  const [timePreference, setTimePreference] = useState<string[]>([]);

  const handleTimeToggle = (time: string) => {
    setTimePreference((prev) =>
      prev.includes(time) ? prev.filter((t) => t !== time) : [...prev, time]
    );
  };

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <label className="text-[15px] font-bold text-[#333]">
            Marital status:
          </label>
          <select className="w-full h-9.5 px-3 border border-[#CCC] bg-white text-[15px] text-[#333]">
            <option>Select an answer</option>
          </select>
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-sm font-bold text-[#333]">
            Do you have children?
          </label>
          <select className="w-full h-9.5 px-3 border border-[#CCC] bg-white text-[15px] text-[#333]">
            <option>Select an answer</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-[15px] text-[#333] leading-6">
          Provide some details about your situation, but remember not to include
          sensitive information. An attorney-client relationship is only formed
          once an attorney formally agrees to represent you.
        </p>
        <div className="relative">
          <div className="absolute right-0 top-0 text-xs text-[#333] opacity-70">
            2000
          </div>
          <textarea
            className="w-full h-32 mt-5 p-3 border border-[#CCC] bg-white text-[15px] text-[#333] resize-none"
            placeholder=""
          />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <label className="flex items-start gap-2 cursor-pointer">
          <div className="relative flex-shrink-0 w-3.5 h-3.5 mt-1">
            <div
              className={`w-full h-full ${
                phoneCall
                  ? "bg-gradient-to-b from-[#0071BC] to-[#00D2FF]"
                  : "border border-[#767676] bg-white"
              }`}
            >
              {phoneCall && (
                <svg
                  width="7"
                  height="6"
                  viewBox="0 0 7 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <path
                    d="M0.5 3L2.5 5.5L6.5 0.5"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          </div>
          <input
            type="checkbox"
            checked={phoneCall}
            onChange={(e) => setPhoneCall(e.target.checked)}
            className="sr-only"
          />
          <span className="text-[15px] text-[#333]">
            I prefer that this attorney replies to my message with a phone call
            (optional).
          </span>
        </label>

        {phoneCall && (
          <>
            <input
              type="tel"
              placeholder="US phone numbers only"
              className="w-full lg:w-[366px] h-9.5 px-3 border border-[#CCC] bg-white text-[15px] placeholder:text-[#333] placeholder:opacity-40"
            />

            <div className="flex flex-col gap-3">
              <label className="text-[15px] text-[#333]">What time is best?</label>
              <div className="flex flex-wrap gap-6">
                {["Morning", "Afternoon", "Evening"].map((time) => (
                  <label key={time} className="flex items-center gap-2 cursor-pointer">
                    <div className="relative w-3.5 h-3.5">
                      <input
                        type="checkbox"
                        checked={timePreference.includes(time)}
                        onChange={() => handleTimeToggle(time)}
                        className="sr-only"
                      />
                      <div
                        className={`w-full h-full rounded-sm ${
                          timePreference.includes(time)
                            ? "bg-gradient-to-b from-[#0071BC] to-[#00D2FF]"
                            : "border border-[#767676] bg-white"
                        }`}
                      >
                        {timePreference.includes(time) && (
                          <svg
                            width="7"
                            height="6"
                            viewBox="0 0 7 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                          >
                            <path
                              d="M0.5 3L2.5 5.5L6.5 0.5"
                              stroke="white"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-base text-[#333]">{time}</span>
                  </label>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      <button className="w-fit px-9 py-1.5 bg-gradient-to-b from-[#0071BC] to-[#00D2FF] text-white text-[15px] hover:opacity-90 transition-opacity">
        Submit
      </button>
    </div>
  );
}
