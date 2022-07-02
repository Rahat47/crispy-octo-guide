import Form from '../Components/Contact/Form';
import FooterSocial from '../Components/Shared/FooterSocial';

const Contact = () => {
    return (
        <section className='bg-primary'>
            <div className='w-[85%] mx-auto h-screen'>
                <h4 className='text-xl font-bold font-primary text-custom-blue text-shadow-main py-4'>
                    Write me a Message!
                </h4>

                {/* form */}
                <Form />

                {/* footer */}
                <FooterSocial top={'mt-32'} />
            </div>
        </section>
    );
};

export default Contact;
