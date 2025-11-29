
type FormHeadingProps = {
    title: string;
    description: string;
};

const FormHeading = ({ title, description }: FormHeadingProps) => {
    return (
        <div className="space-y-4">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default FormHeading;