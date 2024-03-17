import Header from '~/components/Header';
import Footer from '~/components/Footer';
import HeadInfo from "~/components/HeadInfo";

const PageComponent = ({
                         locale = '',
                         termsOfServiceLanguageText,
                         indexLanguageText,
                       }) => {

  return (
    <>
      <HeadInfo
        title={termsOfServiceLanguageText.title}
        description={termsOfServiceLanguageText.description}
        locale={locale}
        page={"/terms-of-service"}
      />
      <Header
        locale={locale}
        page={'terms-of-service'}
        indexLanguageText={indexLanguageText}
      />
      <main className="w-[95%] md:w-[65%] lg:w-[55%] 2xl:w-[45%] mx-auto h-full my-8">
        <div className="p-6 prose mx-auto my-auto text-gray-300">
          <h1 className="text-3xl font-extrabold pb-6 text-white">
            {termsOfServiceLanguageText.h1}
          </h1>
          <p>{termsOfServiceLanguageText.date}</p>
          <p>{termsOfServiceLanguageText.desc}</p>
          <h4 className={"text-white font-bold"}>{termsOfServiceLanguageText.h4_1}</h4>
          <p>{termsOfServiceLanguageText.h4_1_p}</p>
          <h4 className={"text-white font-bold"}>{termsOfServiceLanguageText.h4_2}</h4>
          <p>{termsOfServiceLanguageText.h4_2_p}</p>
          <h4 className={"text-white font-bold"}>{termsOfServiceLanguageText.h4_3}</h4>
          <p>{termsOfServiceLanguageText.h4_3_p}</p>
          <h4 className={"text-white font-bold"}>{termsOfServiceLanguageText.h4_4}</h4>
          <p>{termsOfServiceLanguageText.h4_4_p}</p>
          <h4 className={"text-white font-bold"}>{termsOfServiceLanguageText.h4_5}</h4>
          <p>
            {termsOfServiceLanguageText.h4_5_p}<a
            href={`https://sorawithvideos.com/${locale}/privacy-policy`}
            className={"text-white"}>https://sorawithvideos.com/privacy-policy</a>
          </p>
          <h4 className={"text-white font-bold"}>{termsOfServiceLanguageText.h4_6}</h4>
          <p>{termsOfServiceLanguageText.h4_6_p}</p>
          <h4 className={"text-white font-bold"}>{termsOfServiceLanguageText.h4_7}</h4>
          <p>{termsOfServiceLanguageText.h4_7_p}</p>
          <h4 className={"text-white font-bold"}>{termsOfServiceLanguageText.h4_8}</h4>
          <p>
            {termsOfServiceLanguageText.h4_8_p}<a href="mailto:hi@sorawithvideos.com" className={"text-white"}>hi@sorawithvideos.com</a>.
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
