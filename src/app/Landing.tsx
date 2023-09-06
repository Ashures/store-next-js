export default function Landing({ title, bg }: {title: string, bg: string}) {    
    return (
        <div className="landing" style={{backgroundImage: `url(${bg})`}}>
            <h1 className="landing-heading">{title}</h1>
            <div className="light-shadow watermark">® 2023 ASHURES</div>
        </div>
    );
}