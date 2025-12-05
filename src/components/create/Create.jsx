import useForm from '../../hooks/useForm';

export default function Create() {
    const createSubmitHandler = (values) => {
        console.log("Create data:", values);
    };

    const { values, onChange, onSubmit } = useForm(createSubmitHandler, {
        name: '',
        breed: '',
        imageUrl: '',
        description: '',
    });

    return (
        <section id="create-page">
            <div className="create-container">
                {/* Лявата част: Картинка */}
                <div className="create-side-image">
                    {/* Няма нужда от <img> таг, ще сложим background image с CSS */}
                </div>

                {/* Дясната част: Формата */}
                <div className="create-form-container">
                    <h1>Add a New Pet</h1>
                    <p>Share your best friend with the world!</p>

                    <form id="create" onSubmit={onSubmit}>
                        <div className="input-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="e.g. Max"
                                value={values.name}
                                onChange={onChange}
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="breed">Breed</label>
                            <input
                                type="text"
                                name="breed"
                                id="breed"
                                placeholder="e.g. Golden Retriever"
                                value={values.breed}
                                onChange={onChange}
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="imageUrl">Image URL</label>
                            <input
                                type="text"
                                name="imageUrl"
                                id="imageUrl"
                                placeholder="http://..."
                                value={values.imageUrl}
                                onChange={onChange}
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="description">Description</label>
                            <textarea 
                                name="description" 
                                id="description" 
                                placeholder="Tell us about your pet..."
                                value={values.description}
                                onChange={onChange}
                            ></textarea>
                        </div>

                        <input className="btn submit-btn" type="submit" value="Publish Pet" />
                    </form>
                </div>
            </div>
        </section>
    );
}