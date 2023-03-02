
const FoodBox = ({ food }) => {
    return (
        <div>

            <article className="lista-frutas">

                <div>
                    <img src={food.image} width="100px" alt={food.name} />
                </div>

                <div>

                    <p>
                        <strong>{food.name}</strong> <br />
                        <p>{food.calories} cal</p>
                    </p>

                </div>



                <input className="input" type="number" value="1" />

                <div>
                    <button className="button info">+</button>
                </div>
<button>DELETE</button>

            </article>

        </div>
    );
}


export default FoodBox;
