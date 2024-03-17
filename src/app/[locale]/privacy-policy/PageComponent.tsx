import Header from '~/components/Header';
import Footer from '~/components/Footer';
import HeadInfo from "~/components/HeadInfo";

const PageComponent = ({
                         locale = '',
                         privacyPolicyLanguageText,
                         indexLanguageText,
                       }) => {

  return (
    <>
      <HeadInfo
        title={privacyPolicyLanguageText.title}
        description={privacyPolicyLanguageText.description}
        locale={locale}
        page={"/privacy-policy"}
      />
      <Header
        locale={locale}
        page={'privacy-policy'}
        indexLanguageText={indexLanguageText}
      />
      <main className="w-[95%] md:w-[65%] lg:w-[55%] 2xl:w-[45%] mx-auto h-full my-8">
        <div className="p-6 prose mx-auto text-gray-300">
          <h1 className="text-3xl font-extrabold pb-6 text-white">
            {privacyPolicyLanguageText.h1}
          </h1>
          <p>{privacyPolicyLanguageText.date}</p>
          <p>{privacyPolicyLanguageText.desc}</p>
          <h4 className={"text-white font-bold"}>{privacyPolicyLanguageText.h4_1}</h4>
          <p>{privacyPolicyLanguageText.h4_1_pa}</p>
          <p>{privacyPolicyLanguageText.h4_1_pb}</p>
          <h4 className={"text-white font-bold"}>{privacyPolicyLanguageText.h4_2}</h4>
          <p>{privacyPolicyLanguageText.h4_2_p}</p>
          <h4 className={"text-white font-bold"}>{privacyPolicyLanguageText.h4_3}</h4>
          <p>{privacyPolicyLanguageText.h4_3_p}</p>
          <h4 className={"text-white font-bold"}>{privacyPolicyLanguageText.h4_4}</h4>
          <p>{privacyPolicyLanguageText.h4_4_p}</p>
          <h4 className={"text-white font-bold"}>{privacyPolicyLanguageText.h4_5}</h4>
          <p>{privacyPolicyLanguageText.h4_5_p}</p>
          <h4 className={"text-white font-bold"}>{privacyPolicyLanguageText.h4_6}</h4>
          <p>
            {privacyPolicyLanguageText.h4_6_p}{" "}<a href="mailto:hi@sorawithvideos.com" className={"text-white"}>hi@sorawithvideos.com</a>.
          </p>
        </div>
      </main>
      <Footer
        locale={locale}
        description={indexLanguageText.description}
      />
    </>
  )
}

export default PageComponent
