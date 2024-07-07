function EducationInfoPreview() {
    return (
        <div className="preview-education-info">
            <h3 className="preview-section-header">Education Background</h3>
            <div className="preview-section-subheader">
                <p className="preview-organization"></p>
                <p className="preview-date"></p>
            </div>
            <p className="preview-program"></p>
            <ul>
                <li>Awards:</li>
                <li>Organizations:</li>
                <li>Courses:</li>
            </ul>
        </div>
    )
}

export default EducationInfoPreview