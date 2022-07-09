import React from "react";

function PostIt(props) {
    return (
        <div className="container col-3 d-inline-flex">
            <div className="row">
                <section id="note" className="my-4 mx-5">
                    <h1 className="nameCharacter">{props.name}</h1>
                    <span className="favoriteFood">
                        <p class="my-0">Favorite Food:</p>
                        <ul class="d-flex mb-3">
                            <li>{props.favorite_food}</li>
                        </ul>
                    </span>
                    <span className="biography">
                        <p className="my-0">Bios:</p>
                        <ul className="d-flex mx-0 mb-3">
                            <li>{props.bios}</li>
                        </ul>
                    </span>
                    <span className="policy">
                        <p className="my-0">Policy:</p>
                        <ul className="d-flex mx-0 mb-3">
                            <li>{props.policy}</li>
                        </ul>
                    </span>
                </section>
            </div>
        </div>

    );
}

export default PostIt; 