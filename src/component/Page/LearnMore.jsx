import React from "react";
import { Link } from "react-router";

const LearnMore = () => {
  return (
    <div className="w-10/12 mx-auto my-10 mt-20">
        <p className="rancho-regular flex gap-2 mb-4"> <Link to='/' className="floating-arrow">
          {" "}
              <svg
                className="w-6 h-6 text-gray-700 floating-arrow"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
        </Link> Go to home</p>
      <div>
        <img
          className="w-full rounded-xl object-cover"
          src="https://i.ibb.co/99cr2jNY/12.jpg"
          alt=""
        />
      </div>
      <div>
        <h5 className="w-8/12 mx-auto text-center my-5 text-[25px] rancho-regular ">
          Why Should You Drink Coffee? Discover 10 Health Benefits of Coffee
        </h5>
        <p className="text-[16px] w-10/12 mx-auto font-bold">
          Coffee is not just a way to wake yourself up — it's also quite
          beneficial for your health. Research has shown that drinking coffee in
          moderation every day can have positive effects on both the body and
          mind. Let’s explore 10 health benefits of drinking coffee:
        </p>
        <div className="w-8/12 mx-auto my-8">
          <p> Increases Focus and Energy</p>
          <p className="text-[16px] text-gray-600 mb-3">
            The caffeine in coffee stimulates the nervous system, enhancing
            focus and boosting energy levels.
          </p>
          <p>Improves Mood</p>
          <p className="text-[16px] text-gray-600 mb-3">
            Caffeine stimulates the release of dopamine, a hormone that helps
            improve your mood and makes you feel happier.
          </p>
          <p>Enhances Brain Function</p>
          <p  className="text-[16px] text-gray-600 mb-3">
            Regular coffee consumption keeps your brain alert and may help
            prevent Alzheimer’s or dementia.
          </p>
          <p>Aids in Fat Burning</p>
          <p  className="text-[16px] text-gray-600 mb-3">
            Caffeine increases your metabolic rate, which helps your body burn
            excess fat more efficiently.
          </p>
          <p>Provides Antioxidants</p>
          <p  className="text-[16px] text-gray-600 mb-3">
            Coffee is rich in antioxidants that help protect your body’s cells
            from damage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
