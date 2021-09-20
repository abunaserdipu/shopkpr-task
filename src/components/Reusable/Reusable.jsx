import {
  faCog,
  faCubes,
  faDownload,
  faHeart,
  faImages,
  faList,
  faPen,
  faPlusCircle,
  faQuestionCircle,
  faSearch,
  faSquare,
  faTrash,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../styles/style.css";
import dummyData from "../dummyData/dummyData";
import cardData from "../dummyData/cardData";

function Reusable() {
  return (
    <>
      <div className="d-flex" id="wrapper">
        {/* First Sidebar */}
        <div className="bg-white" id="sidebar-wrapper">
          <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold border-bottom">
            <FontAwesomeIcon className=" me-2" icon={faCubes} />
            shopkpr
          </div>
          <div className="list-group list-group-flush my-3">
            <p className="list-group-item list-group-item-action bg-success active">
              <FontAwesomeIcon className="me-2" icon={faUsers} />{" "}
              <span>Admin</span>
            </p>
            <p className="list-group-item list-group-item-action bg-transparent second-text">
              <FontAwesomeIcon className=" me-2" icon={faHeart} />
              Products
            </p>
            <p className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
              <FontAwesomeIcon className=" me-2" icon={faCog} />
              Settings
            </p>
            <p className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
              <FontAwesomeIcon className=" me-2" icon={faQuestionCircle} />
              Helps
            </p>
          </div>
        </div>
        {/*  sidebar-wrapper  */}

        {/*  Page Content */}
        <div id="page-content-wrapper">
          <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
            <div className="d-flex align-items-center">
              <i
                className="fas fa-align-left primary-text fs-4 me-3"
                id="menu-toggle"
              ></i>
              <h6 className=" m-0">
                <span style={{ color: "green" }}>Dashboard</span>{" "}
                <span>//</span> <span style={{ color: "green" }}>Admin</span>
              </h6>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <button className="nav-link btn btn-success text-white">
                    <FontAwesomeIcon className="me-2" icon={faList} />
                    Dashboard
                  </button>
                </li>
              </ul>
            </div>
          </nav>

          {/* Cards */}
          <div className="container-fluid px-4">
            <p>Summary</p>
            <div className="row g-3 my-2 card-text">
              {cardData.map((card) => (
                <div className="col-md-3">
                  <div className="p-2 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                    <span className="circle text-center primary-text border rounded-full secondary-bg">
                      <span className="icon">{card.icon}</span>
                    </span>
                    <div>
                      <h3>{card.name}</h3>
                      <p>{card.quantity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Multiple Button */}
            <div className="d-flex">
              <div className="p-1">
                <button className="btn btn-outline-success btn-md w-100">
                  <FontAwesomeIcon icon={faDownload} /> Download CSV
                </button>
              </div>
              <div className="p-1">
                <button className="btn btn-outline-success w-100">
                  <FontAwesomeIcon icon={faDownload} /> Download PDF
                </button>
              </div>
              <div className="ms-auto p-1">
                <button className="btn btn-success w-100">
                  <FontAwesomeIcon icon={faPlusCircle} size="lg" /> Add User
                </button>
              </div>
            </div>
            {/* Search input field */}
            <div className="row my-4">
              <div className="input-group mb-2">
                <span>
                  <FontAwesomeIcon
                    icon={faSearch}
                    color="green"
                    aria-hidden="true"
                  />
                </span>
                <input type="search" placeholder="Search" />
              </div>

              {/* Table Data */}
              <div className="col">
                <table className="table table-striped">
                  <thead className="bg-dark text-white text-center">
                    <tr>
                      <th scope="col">User ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">User Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Creation Date</th>
                      <th scope="col">User Details</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dummyData.map((dummy) => (
                      <tr>
                        <td>{dummy.id}</td>
                        <td>{dummy.name}</td>
                        <td>{dummy.userName}</td>
                        <td>{dummy.email}</td>
                        <td>{dummy.date}</td>
                        <td>
                          <a href="#dkc">View Details</a>
                        </td>
                        <td>
                          <span className="me-1">
                            <FontAwesomeIcon icon={faPen} color="green" />{" "}
                            <a href="#dkc">edit</a>
                          </span>{" "}
                          <FontAwesomeIcon icon={faTrash} color="red" />{" "}
                          <a href="#dkc">delete</a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Second Sidebar */}
        <div className="bg-white" id="sidebar-wrapper">
          <div className="text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
            <FontAwesomeIcon className="me-2" icon={faImages} />
            Management
          </div>
          <div className="list-group list-group-flush my-3">
            <p class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
              <div className="d-flex justify-content-around align-items-center">
                <NavLink
                  to="/dash-board/admin/manage-user"
                  activeClassName="active-link"
                >
                  <FontAwesomeIcon className="me-2" icon={faSquare} size="3x" />
                </NavLink>
                <div>
                  <span className="text-dark">Manage Users</span> <br />
                  <small className="text-secondary">
                    Let's you manage users
                  </small>
                </div>
              </div>
            </p>
            <p
              to="/dash-board/admin/manage-groups"
              class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            >
              <div className="d-flex justify-content-around align-items-center">
                <NavLink
                  to="/dash-board/admin/manage-groups"
                  activeClassName="active-link"
                >
                  <FontAwesomeIcon className="me-2" icon={faSquare} size="3x" />
                </NavLink>
                <div>
                  <span className="text-dark">Manage Groups</span> <br />
                  <small className="text-secondary">
                    Let's you manage groups
                  </small>
                </div>
              </div>
            </p>
            <p
              to="/"
              class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            >
              <div className="d-flex justify-content-around align-items-center">
                <NavLink
                  to="/dash-board/admin/manage-roles"
                  activeClassName="active-link"
                >
                  <FontAwesomeIcon className="me-2" icon={faSquare} size="3x" />
                </NavLink>
                <div>
                  <span className="text-dark">Manage Roles</span> <br />
                  <small className="text-secondary">
                    Let's you manage roles
                  </small>
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>
      {/* page-content-wrapper  */}
    </>
  );
}

export default Reusable;
