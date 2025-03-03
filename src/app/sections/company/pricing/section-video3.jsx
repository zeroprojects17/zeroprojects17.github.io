import { publicUrlFor } from "../../../../globals/constants";

function SectionVideo3({_data}) {
    return (
        <>
            <div className="section-full sx-video-2-outer" style={{ backgroundImage: `url(${publicUrlFor(_data.background)})` }}>
                <div className="container">
                    <div className="sx-vodeo-section text-center">
                        <div className="sx-video-btn-wrap">
                            <a href="https://www.youtube.com/watch?v=c1XNqw2gSbU" className="mfp-video circle">
                                <i className="flaticon-play" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SectionVideo3;