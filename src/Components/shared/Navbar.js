import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const active = "bg-[#7777] hover:bg-[#6666]  py-1 "
    return (
        <div className='w-fit mx-auto mb-5 '>
            <ul className="menu menu-horizontal sticky bg-transparent rounded  p-2 click:bg-none">
                {/* <li >
                    <span>Solvers</span>
                    <ul className="rounded bg-white p-2">
                        <li><Link>Sudoku</Link></li>
                        <li><Link>Submenu 2</Link></li>
                        <li><Link>Submenu 3</Link></li>
                    </ul>
                </li> */}
                <li>
                    <NavLink
                        className={({ isActive, isPending }) => isPending ? "pending" : isActive ? active : ""}
                        to="/">Home
                    </NavLink>
                </li>
                <li><NavLink className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? active : ""
                }
                    to="solver/sudoku">Sudoku</NavLink></li>
                <li><NavLink className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? active : ""
                }
                    to="/tictactoe">Tic Tac Toe</NavLink>
                </li>
                <li><NavLink className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? active : ""
                }
                    to="/convert/morsecode">Morse Code Converter </NavLink>
                </li>
            </ul >
        </div >
    );
};

export default Navbar;