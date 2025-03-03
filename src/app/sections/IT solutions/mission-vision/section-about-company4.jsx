import SectionAboutCompany2Inner from "../../home/index2/section-about-company2-inner";
import SectionOurInfo1 from "../../company/why-choose-us/section-our-info1";

function SectionAboutCompany4() {
    return (
        <>
            <div className="section-full  p-t110 p-b80 bg-white sx-about-bx3-outer">
                <div className="container">
                    <div className="section-content">
                        <SectionAboutCompany2Inner />
                        {/* Info START */}
                        <SectionOurInfo1 />
                        {/* Info  END */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionAboutCompany4;