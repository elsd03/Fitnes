const ServicesItem = ({
                          type,
                          description,
                          days,
                          duration,
                          price,
                          borderBottom = false,
                      }) => {
    return (
        <div className="classes-block" style={{
            borderBottom: borderBottom? '1px solid black': 'none'
        }}>
            <div className="classes-block-item">
                <b>{type}</b>
                <p>{description}</p>
            </div>
            <div className="classes-block-item">
                <p>{days}</p>
                <p>{duration}</p>
                <b>{price}</b>
            </div>
        </div>
    );
};

export default ServicesItem;
