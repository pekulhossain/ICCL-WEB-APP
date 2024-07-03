import "./TestmonialCard.css";
const TestimonialCard = () => {
    return (
        <div>
            <figure className="testimonial_card">
                <blockquote>Calvin: Sometimes when I am talking with others, my words can not keep up with my thoughts. I wonder why we think faster than we speak. Hobbes: Probably so we can think twice. </blockquote>
                <div className="author">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg" alt="sq-sample1" />
                    <h5>Pelican Steve <span> LittleSnippets</span></h5>
                </div>
            </figure>
        </div>
    );
};

export default TestimonialCard;