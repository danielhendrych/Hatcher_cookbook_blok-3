import React, { useState, useMemo } from "react";
import ItemGridList from "./ItemGridList";
import ItemTableList from "./ItemTableList";

import Icon from "@mdi/react";
import { mdiTable, mdiViewGridOutline, mdiMagnify } from "@mdi/js";

import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ListItem(props) {
    const [viewType, setViewType] = useState("grid");
    const isGrid = viewType === "grid";
    const [searchBy, setSearchBy] = useState("");
    

    const filteredListItem = useMemo(() => {
        return props.recipes.filter((recipe) => {
            return (
               recipe.name
                    .toLocaleLowerCase()
                    .includes(searchBy.toLocaleLowerCase()) ||
                    recipe.description.toLocaleLowerCase().includes(searchBy.toLocaleLowerCase())
            );
        });
    }, [searchBy]);


    function handleSearch(event) {
        event.preventDefault();
        setSearchBy(event.target["searchInput"].value);
    }

    function handleSearchDelete(event) {
        if (!event.target.value) setSearchBy("");
    }

    return (
        <div>
            <Navbar bg="light">
                <div className="container-fluid">
                    <Navbar.Brand>Seznam receptů</Navbar.Brand>
                    <div>
                        <Form className="d-flex" onSubmit={handleSearch}>
                            <Form.Control
                                id={"searchInput"}
                                style={{ maxWidth: "150px" }}
                                type="search"
                                placeholder="Vyhledat"
                                aria-label="Vyhledat"
                                onChange={handleSearchDelete}
                            />
                            <Button
                                style={{ marginRight: "8px" }}
                                variant="outline-success"
                                type="submit"
                            >
                                <Icon size={1} path={mdiMagnify} />
                            </Button>
                            <Button
                                variant="outline-primary"
                                onClick={() =>
                                    setViewType((currentState) => {
                                        if (currentState === "grid") return "table";
                                        else return "grid";
                                    })
                                }
                            >
                                <Icon size={1} path={isGrid ? mdiTable : mdiViewGridOutline} />{" "}
                                {isGrid ? "Tabulka" : "Grid"}
                            </Button>

                           
                        </Form>
                    </div>
                </div>
            </Navbar>
            {isGrid ? (
                <ItemGridList recipes={filteredListItem} />
            ) : (
                <ItemTableList recipes={filteredListItem} />
            )}
        </div>
    );
}


export default ListItem;

/*<Button
                                style={{ marginLeft: "8px" }}
                                variant="outline-primary"
                                onClick={() =>
                                    setToggle((currentState) => {
                                        if (currentState === toggle) {
                                            style={{ maxWidth: "18rem" }}
                                        }
                                        else if {
                                            style={{ maxWidth: "18rem" }}
                                        }
                                    })
                                }
                            >*/
                            /*<Icon size={1} path={isGrid ? mdiTable : mdiViewGridOutline} />{" "}
                            {isGrid ? "Malý" : "Velký"}
                        </Button> */