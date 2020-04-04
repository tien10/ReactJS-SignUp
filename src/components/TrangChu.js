import React, { Component } from 'react'

export class TrangChu extends Component {
    render() {
        return (
            <div className="super_container">
                {/* Header */}
                <header className="header">
                    {/* Top Bar */}
                    <div className="top_bar">
                        <div className="container">
                            <div className="row">
                                <div className="col d-flex flex-row">
                                    <div className="top_bar_contact_item">
                                        <div className="top_bar_icon"><img src="images/phone.png" alt="" /></div>+38 068 005 3570
            </div>
                                    <div className="top_bar_contact_item">
                                        <div className="top_bar_icon"><img src="images/mail.png" alt="" /></div><a href="mailto:fastsales@gmail.com">fastsales@gmail.com</a>
                                    </div>
                                    <div className="top_bar_content ml-auto">
                                        <div className="top_bar_menu">
                                            <ul className="standard_dropdown top_bar_dropdown">
                                                <li>
                                                    <a href="##">English<i className="fas fa-chevron-down" /></a>
                                                    <ul>
                                                        <li><a href="##">Italian</a></li>
                                                        <li><a href="##">Spanish</a></li>
                                                        <li><a href="##">Japanese</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="##">$ US dollar<i className="fas fa-chevron-down" /></a>
                                                    <ul>
                                                        <li><a href="##">EUR Euro</a></li>
                                                        <li><a href="##">GBP British Pound</a></li>
                                                        <li><a href="##">JPY Japanese Yen</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="top_bar_user">
                                            <div className="user_icon"><img src="images/user.svg" alt="" /></div>
                                            <div><a href="##">Register</a></div>
                                            <div><a href="##">Sign in</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Header Main */}
                    <div className="header_main">
                        <div className="container">
                            <div className="row">
                                {/* Logo */}
                                <div className="col-lg-2 col-sm-3 col-3 order-1">
                                    <div className="logo_container">
                                        <div className="logo"><a href="##">OneTech</a></div>
                                    </div>
                                </div>
                                {/* Search */}
                                <div className="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
                                    <div className="header_search">
                                        <div className="header_search_content">
                                            <div className="header_search_form_container">
                                                <form action="#" className="header_search_form clearfix">
                                                    <input type="search" required="required" className="header_search_input" placeholder="Search for products..." />
                                                    <div className="custom_dropdown">
                                                        <div className="custom_dropdown_list">
                                                            <span className="custom_dropdown_placeholder clc">All Categories</span>
                                                            <i className="fas fa-chevron-down" />
                                                            <ul className="custom_list clc">
                                                                <li><a className="clc" href="##">All Categories</a></li>
                                                                <li><a className="clc" href="##">Computers</a></li>
                                                                <li><a className="clc" href="##">Laptops</a></li>
                                                                <li><a className="clc" href="##">Cameras</a></li>
                                                                <li><a className="clc" href="##">Hardware</a></li>
                                                                <li><a className="clc" href="##">Smartphones</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <button type="submit" className="header_search_button trans_300" value="Submit"><img src="images/search.png" alt="" /></button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Wishlist */}
                                <div className="col-lg-4 col-9 order-lg-3 order-2 text-lg-left text-right">
                                    <div className="wishlist_cart d-flex flex-row align-items-center justify-content-end">
                                        <div className="wishlist d-flex flex-row align-items-center justify-content-end">
                                            <div className="wishlist_icon"><img src="images/heart.png" alt="" /></div>
                                            <div className="wishlist_content">
                                                <div className="wishlist_text"><a href="##">Wishlist</a></div>
                                                <div className="wishlist_count">115</div>
                                            </div>
                                        </div>
                                        {/* Cart */}
                                        <div className="cart">
                                            <div className="cart_container d-flex flex-row align-items-center justify-content-end">
                                                <div className="cart_icon">
                                                    <img src="images/cart.png" alt="" />
                                                    <div className="cart_count"><span>10</span></div>
                                                </div>
                                                <div className="cart_content">
                                                    <div className="cart_text"><a href="##">Cart</a></div>
                                                    <div className="cart_price">$85</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Main Navigation */}
                    <nav className="main_nav">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="main_nav_content d-flex flex-row">
                                        {/* Categories Menu */}
                                        <div className="cat_menu_container">
                                            <div className="cat_menu_title d-flex flex-row align-items-center justify-content-start">
                                                <div className="cat_burger"><span /><span /><span /></div>
                                                <div className="cat_menu_text">categories</div>
                                            </div>
                                            <ul className="cat_menu">
                                                <li><a href="##">Computers &amp; Laptops <i className="fas fa-chevron-right ml-auto" /></a></li>
                                                <li><a href="##">Cameras &amp; Photos<i className="fas fa-chevron-right" /></a></li>
                                                <li className="hassubs">
                                                    <a href="##">Hardware<i className="fas fa-chevron-right" /></a>
                                                    <ul>
                                                        <li className="hassubs">
                                                            <a href="##">Menu Item<i className="fas fa-chevron-right" /></a>
                                                            <ul>
                                                                <li><a href="##">Menu Item<i className="fas fa-chevron-right" /></a></li>
                                                                <li><a href="##">Menu Item<i className="fas fa-chevron-right" /></a></li>
                                                                <li><a href="##">Menu Item<i className="fas fa-chevron-right" /></a></li>
                                                                <li><a href="##">Menu Item<i className="fas fa-chevron-right" /></a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="##">Menu Item<i className="fas fa-chevron-right" /></a></li>
                                                        <li><a href="##">Menu Item<i className="fas fa-chevron-right" /></a></li>
                                                        <li><a href="##">Menu Item<i className="fas fa-chevron-right" /></a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="##">Smartphones &amp; Tablets<i className="fas fa-chevron-right" /></a></li>
                                                <li><a href="##">TV &amp; Audio<i className="fas fa-chevron-right" /></a></li>
                                                <li><a href="##">Gadgets<i className="fas fa-chevron-right" /></a></li>
                                                <li><a href="##">Car Electronics<i className="fas fa-chevron-right" /></a></li>
                                                <li><a href="##">Video Games &amp; Consoles<i className="fas fa-chevron-right" /></a></li>
                                                <li><a href="##">Accessories<i className="fas fa-chevron-right" /></a></li>
                                            </ul>
                                        </div>
                                        {/* Main Nav Menu */}
                                        <div className="main_nav_menu ml-auto">
                                            <ul className="standard_dropdown main_nav_dropdown">
                                                <li><a href="##">Home<i className="fas fa-chevron-down" /></a></li>
                                                <li className="hassubs">
                                                    <a href="##">Super Deals<i className="fas fa-chevron-down" /></a>
                                                    <ul>
                                                        <li>
                                                            <a href="##">Menu Item<i className="fas fa-chevron-down" /></a>
                                                            <ul>
                                                                <li><a href="##">Menu Item<i className="fas fa-chevron-down" /></a></li>
                                                                <li><a href="##">Menu Item<i className="fas fa-chevron-down" /></a></li>
                                                                <li><a href="##">Menu Item<i className="fas fa-chevron-down" /></a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="##">Menu Item<i className="fas fa-chevron-down" /></a></li>
                                                        <li><a href="##">Menu Item<i className="fas fa-chevron-down" /></a></li>
                                                        <li><a href="##">Menu Item<i className="fas fa-chevron-down" /></a></li>
                                                    </ul>
                                                </li>
                                                <li className="hassubs">
                                                    <a href="##">Featured Brands<i className="fas fa-chevron-down" /></a>
                                                    <ul>
                                                        <li>
                                                            <a href="##">Menu Item<i className="fas fa-chevron-down" /></a>
                                                            <ul>
                                                                <li><a href="##">Menu Item<i className="fas fa-chevron-down" /></a></li>
                                                                <li><a href="##">Menu Item<i className="fas fa-chevron-down" /></a></li>
                                                                <li><a href="##">Menu Item<i className="fas fa-chevron-down" /></a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="##">Menu Item<i className="fas fa-chevron-down" /></a></li>
                                                        <li><a href="##">Menu Item<i className="fas fa-chevron-down" /></a></li>
                                                        <li><a href="##">Menu Item<i className="fas fa-chevron-down" /></a></li>
                                                    </ul>
                                                </li>
                                                <li className="hassubs">
                                                    <a href="##">Pages<i className="fas fa-chevron-down" /></a>
                                                    <ul>
                                                        <li><a href="shop.html">Shop<i className="fas fa-chevron-down" /></a></li>
                                                        <li><a href="product.html">Product<i className="fas fa-chevron-down" /></a></li>
                                                        <li><a href="blog.html">Blog<i className="fas fa-chevron-down" /></a></li>
                                                        <li><a href="blog_single.html">Blog Post<i className="fas fa-chevron-down" /></a></li>
                                                        <li><a href="regular.html">Regular Post<i className="fas fa-chevron-down" /></a></li>
                                                        <li><a href="cart.html">Cart<i className="fas fa-chevron-down" /></a></li>
                                                        <li><a href="contact.html">Contact<i className="fas fa-chevron-down" /></a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="blog.html">Blog<i className="fas fa-chevron-down" /></a></li>
                                                <li><a href="contact.html">Contact<i className="fas fa-chevron-down" /></a></li>
                                            </ul>
                                        </div>
                                        {/* Menu Trigger */}
                                        <div className="menu_trigger_container ml-auto">
                                            <div className="menu_trigger d-flex flex-row align-items-center justify-content-end">
                                                <div className="menu_burger">
                                                    <div className="menu_trigger_text">menu</div>
                                                    <div className="cat_burger menu_burger_inner"><span /><span /><span /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                    {/* Menu */}
                    <div className="page_menu">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="page_menu_content">
                                        <div className="page_menu_search">
                                            <form action="#">
                                                <input type="search" required="required" className="page_menu_search_input" placeholder="Search for products..." />
                                            </form>
                                        </div>
                                        <ul className="page_menu_nav">
                                            <li className="page_menu_item has-children">
                                                <a href="##">Language<i className="fa fa-angle-down" /></a>
                                                <ul className="page_menu_selection">
                                                    <li><a href="##">English<i className="fa fa-angle-down" /></a></li>
                                                    <li><a href="##">Italian<i className="fa fa-angle-down" /></a></li>
                                                    <li><a href="##">Spanish<i className="fa fa-angle-down" /></a></li>
                                                    <li><a href="##">Japanese<i className="fa fa-angle-down" /></a></li>
                                                </ul>
                                            </li>
                                            <li className="page_menu_item has-children">
                                                <a href="##">Currency<i className="fa fa-angle-down" /></a>
                                                <ul className="page_menu_selection">
                                                    <li><a href="##">US Dollar<i className="fa fa-angle-down" /></a></li>
                                                    <li><a href="##">EUR Euro<i className="fa fa-angle-down" /></a></li>
                                                    <li><a href="##">GBP British Pound<i className="fa fa-angle-down" /></a></li>
                                                    <li><a href="##">JPY Japanese Yen<i className="fa fa-angle-down" /></a></li>
                                                </ul>
                                            </li>
                                            <li className="page_menu_item">
                                                <a href="##">Home<i className="fa fa-angle-down" /></a>
                                            </li>
                                            <li className="page_menu_item has-children">
                                                <a href="##">Super Deals<i className="fa fa-angle-down" /></a>
                                                <ul className="page_menu_selection">
                                                    <li><a href="##">Super Deals<i className="fa fa-angle-down" /></a></li>
                                                    <li className="page_menu_item has-children">
                                                        <a href="##">Menu Item<i className="fa fa-angle-down" /></a>
                                                        <ul className="page_menu_selection">
                                                            <li><a href="##">Menu Item<i className="fa fa-angle-down" /></a></li>
                                                            <li><a href="##">Menu Item<i className="fa fa-angle-down" /></a></li>
                                                            <li><a href="##">Menu Item<i className="fa fa-angle-down" /></a></li>
                                                            <li><a href="##">Menu Item<i className="fa fa-angle-down" /></a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="##">Menu Item<i className="fa fa-angle-down" /></a></li>
                                                    <li><a href="##">Menu Item<i className="fa fa-angle-down" /></a></li>
                                                    <li><a href="##">Menu Item<i className="fa fa-angle-down" /></a></li>
                                                </ul>
                                            </li>
                                            <li className="page_menu_item has-children">
                                                <a href="##">Featured Brands<i className="fa fa-angle-down" /></a>
                                                <ul className="page_menu_selection">
                                                    <li><a href="##">Featured Brands<i className="fa fa-angle-down" /></a></li>
                                                    <li><a href="##">Menu Item<i className="fa fa-angle-down" /></a></li>
                                                    <li><a href="##">Menu Item<i className="fa fa-angle-down" /></a></li>
                                                    <li><a href="##">Menu Item<i className="fa fa-angle-down" /></a></li>
                                                </ul>
                                            </li>
                                            <li className="page_menu_item has-children">
                                                <a href="##">Trending Styles<i className="fa fa-angle-down" /></a>
                                                <ul className="page_menu_selection">
                                                    <li><a href="##">Trending Styles<i className="fa fa-angle-down" /></a></li>
                                                    <li><a href="##">Menu Item<i className="fa fa-angle-down" /></a></li>
                                                    <li><a href="##">Menu Item<i className="fa fa-angle-down" /></a></li>
                                                    <li><a href="##">Menu Item<i className="fa fa-angle-down" /></a></li>
                                                </ul>
                                            </li>
                                            <li className="page_menu_item"><a href="blog.html">blog<i className="fa fa-angle-down" /></a></li>
                                            <li className="page_menu_item"><a href="contact.html">contact<i className="fa fa-angle-down" /></a></li>
                                        </ul>
                                        <div className="menu_contact">
                                            <div className="menu_contact_item">
                                                <div className="menu_contact_icon"><img src="images/phone_white.png" alt="" /></div>+38 068 005 3570
                </div>
                                            <div className="menu_contact_item">
                                                <div className="menu_contact_icon"><img src="images/mail_white.png" alt="" /></div><a href="mailto:fastsales@gmail.com">fastsales@gmail.com</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* Banner */}
                <div className="banner">
                    <div className="banner_background" style={{ backgroundImage: 'url(images/banner_background.jpg)' }} />
                    <div className="container fill_height">
                        <div className="row fill_height">
                            <div className="banner_product_image"><img src="images/banner_product.png" alt="" /></div>
                            <div className="col-lg-5 offset-lg-4 fill_height">
                                <div className="banner_content">
                                    <h1 className="banner_text">new era of smartphones</h1>
                                    <div className="banner_price"><span>$530</span>$460</div>
                                    <div className="banner_product_name">Apple Iphone 6s</div>
                                    <div className="button banner_button"><a href="##">Shop Now</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Characteristics */}
                <div className="characteristics">
                    <div className="container">
                        <div className="row">
                            {/* Char. Item */}
                            <div className="col-lg-3 col-md-6 char_col">
                                <div className="char_item d-flex flex-row align-items-center justify-content-start">
                                    <div className="char_icon"><img src="images/char_1.png" alt="" /></div>
                                    <div className="char_content">
                                        <div className="char_title">Free Delivery</div>
                                        <div className="char_subtitle">from $50</div>
                                    </div>
                                </div>
                            </div>
                            {/* Char. Item */}
                            <div className="col-lg-3 col-md-6 char_col">
                                <div className="char_item d-flex flex-row align-items-center justify-content-start">
                                    <div className="char_icon"><img src="images/char_2.png" alt="" /></div>
                                    <div className="char_content">
                                        <div className="char_title">Free Delivery</div>
                                        <div className="char_subtitle">from $50</div>
                                    </div>
                                </div>
                            </div>
                            {/* Char. Item */}
                            <div className="col-lg-3 col-md-6 char_col">
                                <div className="char_item d-flex flex-row align-items-center justify-content-start">
                                    <div className="char_icon"><img src="images/char_3.png" alt="" /></div>
                                    <div className="char_content">
                                        <div className="char_title">Free Delivery</div>
                                        <div className="char_subtitle">from $50</div>
                                    </div>
                                </div>
                            </div>
                            {/* Char. Item */}
                            <div className="col-lg-3 col-md-6 char_col">
                                <div className="char_item d-flex flex-row align-items-center justify-content-start">
                                    <div className="char_icon"><img src="images/char_4.png" alt="" /></div>
                                    <div className="char_content">
                                        <div className="char_title">Free Delivery</div>
                                        <div className="char_subtitle">from $50</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Deals of the week */}
                <div className="deals_featured">
                    <div className="container">
                        <div className="row">
                            <div className="col d-flex flex-lg-row flex-column align-items-center justify-content-start">
                                {/* Deals */}
                                <div className="deals">
                                    <div className="deals_title">Deals of the Week</div>
                                    <div className="deals_slider_container">
                                        {/* Deals Slider */}
                                        <div className="owl-carousel owl-theme deals_slider">
                                            {/* Deals Item */}
                                            <div className="owl-item deals_item">
                                                <div className="deals_image"><img src="images/deals.png" alt="" /></div>
                                                <div className="deals_content">
                                                    <div className="deals_info_line d-flex flex-row justify-content-start">
                                                        <div className="deals_item_category"><a href="##">Headphones</a></div>
                                                        <div className="deals_item_price_a ml-auto">$300</div>
                                                    </div>
                                                    <div className="deals_info_line d-flex flex-row justify-content-start">
                                                        <div className="deals_item_name">Beoplay H7</div>
                                                        <div className="deals_item_price ml-auto">$225</div>
                                                    </div>
                                                    <div className="available">
                                                        <div className="available_line d-flex flex-row justify-content-start">
                                                            <div className="available_title">Available: <span>6</span></div>
                                                            <div className="sold_title ml-auto">Already sold: <span>28</span></div>
                                                        </div>
                                                        <div className="available_bar"><span style={{ width: '17%' }} /></div>
                                                    </div>
                                                    <div className="deals_timer d-flex flex-row align-items-center justify-content-start">
                                                        <div className="deals_timer_title_container">
                                                            <div className="deals_timer_title">Hurry Up</div>
                                                            <div className="deals_timer_subtitle">Offer ends in:</div>
                                                        </div>
                                                        <div className="deals_timer_content ml-auto">
                                                            <div className="deals_timer_box clearfix" data-target-time>
                                                                <div className="deals_timer_unit">
                                                                    <div id="deals_timer1_hr" className="deals_timer_hr" />
                                                                    <span>hours</span>
                                                                </div>
                                                                <div className="deals_timer_unit">
                                                                    <div id="deals_timer1_min" className="deals_timer_min" />
                                                                    <span>mins</span>
                                                                </div>
                                                                <div className="deals_timer_unit">
                                                                    <div id="deals_timer1_sec" className="deals_timer_sec" />
                                                                    <span>secs</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Deals Item */}
                                            <div className="owl-item deals_item">
                                                <div className="deals_image"><img src="images/deals.png" alt="" /></div>
                                                <div className="deals_content">
                                                    <div className="deals_info_line d-flex flex-row justify-content-start">
                                                        <div className="deals_item_category"><a href="##">Headphones</a></div>
                                                        <div className="deals_item_price_a ml-auto">$300</div>
                                                    </div>
                                                    <div className="deals_info_line d-flex flex-row justify-content-start">
                                                        <div className="deals_item_name">Beoplay H7</div>
                                                        <div className="deals_item_price ml-auto">$225</div>
                                                    </div>
                                                    <div className="available">
                                                        <div className="available_line d-flex flex-row justify-content-start">
                                                            <div className="available_title">Available: <span>6</span></div>
                                                            <div className="sold_title ml-auto">Already sold: <span>28</span></div>
                                                        </div>
                                                        <div className="available_bar"><span style={{ width: '17%' }} /></div>
                                                    </div>
                                                    <div className="deals_timer d-flex flex-row align-items-center justify-content-start">
                                                        <div className="deals_timer_title_container">
                                                            <div className="deals_timer_title">Hurry Up</div>
                                                            <div className="deals_timer_subtitle">Offer ends in:</div>
                                                        </div>
                                                        <div className="deals_timer_content ml-auto">
                                                            <div className="deals_timer_box clearfix" data-target-time>
                                                                <div className="deals_timer_unit">
                                                                    <div id="deals_timer2_hr" className="deals_timer_hr" />
                                                                    <span>hours</span>
                                                                </div>
                                                                <div className="deals_timer_unit">
                                                                    <div id="deals_timer2_min" className="deals_timer_min" />
                                                                    <span>mins</span>
                                                                </div>
                                                                <div className="deals_timer_unit">
                                                                    <div id="deals_timer2_sec" className="deals_timer_sec" />
                                                                    <span>secs</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Deals Item */}
                                            <div className="owl-item deals_item">
                                                <div className="deals_image"><img src="images/deals.png" alt="" /></div>
                                                <div className="deals_content">
                                                    <div className="deals_info_line d-flex flex-row justify-content-start">
                                                        <div className="deals_item_category"><a href="##">Headphones</a></div>
                                                        <div className="deals_item_price_a ml-auto">$300</div>
                                                    </div>
                                                    <div className="deals_info_line d-flex flex-row justify-content-start">
                                                        <div className="deals_item_name">Beoplay H7</div>
                                                        <div className="deals_item_price ml-auto">$225</div>
                                                    </div>
                                                    <div className="available">
                                                        <div className="available_line d-flex flex-row justify-content-start">
                                                            <div className="available_title">Available: <span>6</span></div>
                                                            <div className="sold_title ml-auto">Already sold: <span>28</span></div>
                                                        </div>
                                                        <div className="available_bar"><span style={{ width: '17%' }} /></div>
                                                    </div>
                                                    <div className="deals_timer d-flex flex-row align-items-center justify-content-start">
                                                        <div className="deals_timer_title_container">
                                                            <div className="deals_timer_title">Hurry Up</div>
                                                            <div className="deals_timer_subtitle">Offer ends in:</div>
                                                        </div>
                                                        <div className="deals_timer_content ml-auto">
                                                            <div className="deals_timer_box clearfix" data-target-time>
                                                                <div className="deals_timer_unit">
                                                                    <div id="deals_timer3_hr" className="deals_timer_hr" />
                                                                    <span>hours</span>
                                                                </div>
                                                                <div className="deals_timer_unit">
                                                                    <div id="deals_timer3_min" className="deals_timer_min" />
                                                                    <span>mins</span>
                                                                </div>
                                                                <div className="deals_timer_unit">
                                                                    <div id="deals_timer3_sec" className="deals_timer_sec" />
                                                                    <span>secs</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="deals_slider_nav_container">
                                        <div className="deals_slider_prev deals_slider_nav"><i className="fas fa-chevron-left ml-auto" /></div>
                                        <div className="deals_slider_next deals_slider_nav"><i className="fas fa-chevron-right ml-auto" /></div>
                                    </div>
                                </div>
                                {/* Featured */}
                                <div className="featured">
                                    <div className="tabbed_container">
                                        <div className="tabs">
                                            <ul className="clearfix">
                                                <li className="active">Featured</li>
                                                <li>On Sale</li>
                                                <li>Best Rated</li>
                                            </ul>
                                            <div className="tabs_line"><span /></div>
                                        </div>
                                        {/* Product Panel */}
                                        <div className="product_panel panel active">
                                            <div className="featured_slider slider">
                                                {/* Slider Item */}
                                                <div className="featured_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item discount d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_1.png" alt="" /></div>
                                                        <div className="product_content">
                                                            <div className="product_price discount">$225<span>$300</span></div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount">-25%</li>
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="featured_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_2.png" alt="" /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Apple iPod shuffle</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button active">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="featured_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_3.png" alt="" /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Sony MDRZX310W</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="featured_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item discount d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_4.png" alt="" /></div>
                                                        <div className="product_content">
                                                            <div className="product_price discount">$225<span>$300</span></div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">LUNA Smartphone</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount">-25%</li>
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="featured_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_5.png" alt="" /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Canon STM Kit...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="featured_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_6.png" alt="" /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Samsung J330F...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="featured_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_7.png" alt="" /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Lenovo IdeaPad</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount">-25%</li>
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="featured_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_8.png" alt="" /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Digitus EDNET...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="featured_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_1.png" alt="" /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="featured_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_2.png" alt="" /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="featured_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_3.png" alt="" /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="featured_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_4.png" alt="" /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="featured_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_5.png" alt="" /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="featured_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_6.png" alt="" /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="featured_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_7.png" alt="" /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="featured_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_8.png" alt="" /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="featured_slider_dots_cover" />
                                        </div>
                                        {/* Product Panel */}
                                        <div className="product_panel panel">
                                            <div className="featured_slider slider">
                                                {/* Slider Item */}
                                                <div className="featured_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item discount d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_1.png" alt="" /></div>
                                                        <div className="product_content">
                                                            <div className="product_price discount">$225<span>$300</span></div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount">-25%</li>
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="featured_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_2.png" alt="" /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Apple iPod shuffle</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button active">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="featured_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_3.png" alt="" /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Sony MDRZX310W</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="featured_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item discount d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_4.png" alt="" /></div>
                                                        <div className="product_content">
                                                            <div className="product_price discount">$225<span>$300</span></div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">LUNA Smartphone</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount">-25%</li>
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="featured_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_5.png" alt="" /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Canon STM Kit...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="featured_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_6.png" alt="" /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Samsung J330F...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="featured_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_7.png" alt="" /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Lenovo IdeaPad</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount">-25%</li>
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="featured_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_8.png" alt="" /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Digitus EDNET...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="featured_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_1.png" alt="" /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="featured_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_2.png" alt="" /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="featured_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_3.png" alt="" /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="featured_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_4.png" alt="" /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="featured_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_5.png" alt="" /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="featured_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_6.png" alt="" /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="featured_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_7.png" alt="" /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="featured_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_8.png" alt="" /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="featured_slider_dots_cover" />
                                        </div>
                                        {/* Product Panel */}
                                        <div className="product_panel panel">
                                            <div className="featured_slider slider">
                                                {/* Slider Item */}
                                                <div className="featured_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item discount d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_1.png" alt="" /></div>
                                                        <div className="product_content">
                                                            <div className="product_price discount">$225<span>$300</span></div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount">-25%</li>
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="featured_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_2.png" alt="" /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Apple iPod shuffle</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button active">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="featured_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_3.png" alt="" /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Sony MDRZX310W</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="featured_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item discount d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_4.png" alt="" /></div>
                                                        <div className="product_content">
                                                            <div className="product_price discount">$225<span>$300</span></div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">LUNA Smartphone</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount">-25%</li>
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="featured_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_5.png" alt="" /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Canon STM Kit...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="featured_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_6.png" alt="" /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Samsung J330F...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="featured_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_7.png" alt="" /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Lenovo IdeaPad</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount">-25%</li>
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="featured_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_8.png" alt="" /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Digitus EDNET...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="featured_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_1.png" alt="" /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="featured_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_2.png" alt="" /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="featured_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_3.png" alt="" /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="featured_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_4.png" alt="" /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="featured_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_5.png" alt="" /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="featured_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_6.png" alt="" /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="featured_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_7.png" alt="" /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="featured_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_8.png" alt="" /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="featured_slider_dots_cover" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Popular Categories */}
                <div className="popular_categories">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="popular_categories_content">
                                    <div className="popular_categories_title">Popular Categories</div>
                                    <div className="popular_categories_slider_nav">
                                        <div className="popular_categories_prev popular_categories_nav"><i className="fas fa-angle-left ml-auto" />
                                        </div>
                                        <div className="popular_categories_next popular_categories_nav"><i className="fas fa-angle-right ml-auto" />
                                        </div>
                                    </div>
                                    <div className="popular_categories_link"><a href="##">full catalog</a></div>
                                </div>
                            </div>
                            {/* Popular Categories Slider */}
                            <div className="col-lg-9">
                                <div className="popular_categories_slider_container">
                                    <div className="owl-carousel owl-theme popular_categories_slider">
                                        {/* Popular Categories Item */}
                                        <div className="owl-item">
                                            <div className="popular_category d-flex flex-column align-items-center justify-content-center">
                                                <div className="popular_category_image"><img src="images/popular_1.png" alt="" /></div>
                                                <div className="popular_category_text">Smartphones &amp; Tablets</div>
                                            </div>
                                        </div>
                                        {/* Popular Categories Item */}
                                        <div className="owl-item">
                                            <div className="popular_category d-flex flex-column align-items-center justify-content-center">
                                                <div className="popular_category_image"><img src="images/popular_2.png" alt="" /></div>
                                                <div className="popular_category_text">Computers &amp; Laptops</div>
                                            </div>
                                        </div>
                                        {/* Popular Categories Item */}
                                        <div className="owl-item">
                                            <div className="popular_category d-flex flex-column align-items-center justify-content-center">
                                                <div className="popular_category_image"><img src="images/popular_3.png" alt="" /></div>
                                                <div className="popular_category_text">Gadgets</div>
                                            </div>
                                        </div>
                                        {/* Popular Categories Item */}
                                        <div className="owl-item">
                                            <div className="popular_category d-flex flex-column align-items-center justify-content-center">
                                                <div className="popular_category_image"><img src="images/popular_4.png" alt="" /></div>
                                                <div className="popular_category_text">Video Games &amp; Consoles</div>
                                            </div>
                                        </div>
                                        {/* Popular Categories Item */}
                                        <div className="owl-item">
                                            <div className="popular_category d-flex flex-column align-items-center justify-content-center">
                                                <div className="popular_category_image"><img src="images/popular_5.png" alt="" /></div>
                                                <div className="popular_category_text">Accessories</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Banner */}
                <div className="banner_2">
                    <div className="banner_2_background" style={{ backgroundImage: 'url(images/banner_2_background.jpg)' }} />
                    <div className="banner_2_container">
                        <div className="banner_2_dots" />
                        {/* Banner 2 Slider */}
                        <div className="owl-carousel owl-theme banner_2_slider">
                            {/* Banner 2 Slider Item */}
                            <div className="owl-item">
                                <div className="banner_2_item">
                                    <div className="container fill_height">
                                        <div className="row fill_height">
                                            <div className="col-lg-4 col-md-6 fill_height">
                                                <div className="banner_2_content">
                                                    <div className="banner_2_category">Laptops</div>
                                                    <div className="banner_2_title">MacBook Air 13</div>
                                                    <div className="banner_2_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                      fermentum laoreet.</div>
                                                    <div className="rating_r rating_r_4 banner_2_rating"><i /><i /><i /><i /><i /></div>
                                                    <div className="button banner_2_button"><a href="##">Explore</a></div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8 col-md-6 fill_height">
                                                <div className="banner_2_image_container">
                                                    <div className="banner_2_image"><img src="images/banner_2_product.png" alt="" /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Banner 2 Slider Item */}
                            <div className="owl-item">
                                <div className="banner_2_item">
                                    <div className="container fill_height">
                                        <div className="row fill_height">
                                            <div className="col-lg-4 col-md-6 fill_height">
                                                <div className="banner_2_content">
                                                    <div className="banner_2_category">Laptops</div>
                                                    <div className="banner_2_title">MacBook Air 13</div>
                                                    <div className="banner_2_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                      fermentum laoreet.</div>
                                                    <div className="rating_r rating_r_4 banner_2_rating"><i /><i /><i /><i /><i /></div>
                                                    <div className="button banner_2_button"><a href="##">Explore</a></div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8 col-md-6 fill_height">
                                                <div className="banner_2_image_container">
                                                    <div className="banner_2_image"><img src="images/banner_2_product.png" alt="" /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Banner 2 Slider Item */}
                            <div className="owl-item">
                                <div className="banner_2_item">
                                    <div className="container fill_height">
                                        <div className="row fill_height">
                                            <div className="col-lg-4 col-md-6 fill_height">
                                                <div className="banner_2_content">
                                                    <div className="banner_2_category">Laptops</div>
                                                    <div className="banner_2_title">MacBook Air 13</div>
                                                    <div className="banner_2_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                      fermentum laoreet.</div>
                                                    <div className="rating_r rating_r_4 banner_2_rating"><i /><i /><i /><i /><i /></div>
                                                    <div className="button banner_2_button"><a href="##">Explore</a></div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8 col-md-6 fill_height">
                                                <div className="banner_2_image_container">
                                                    <div className="banner_2_image"><img src="images/banner_2_product.png" alt="" /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Hot New Arrivals */}
                <div className="new_arrivals">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="tabbed_container">
                                    <div className="tabs clearfix tabs-right">
                                        <div className="new_arrivals_title">Hot New Arrivals</div>
                                        <ul className="clearfix">
                                            <li className="active">Featured</li>
                                            <li>Audio &amp; Video</li>
                                            <li>Laptops &amp; Computers</li>
                                        </ul>
                                        <div className="tabs_line"><span /></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-9" style={{ zIndex: 1 }}>
                                            {/* Product Panel */}
                                            <div className="product_panel panel active">
                                                <div className="arrivals_slider slider">
                                                    {/* Slider Item */}
                                                    <div className="arrivals_slider_item">
                                                        <div className="border_active" />
                                                        <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_1.jpg" alt="" /></div>
                                                            <div className="product_content">
                                                                <div className="product_price">$225</div>
                                                                <div className="product_name">
                                                                    <div><a href="product.html">Astro M2 Black</a></div>
                                                                </div>
                                                                <div className="product_extras">
                                                                    <div className="product_color">
                                                                        <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                    </div>
                                                                    <button className="product_cart_button">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <div className="product_fav"><i className="fas fa-heart" /></div>
                                                            <ul className="product_marks">
                                                                <li className="product_mark product_discount">-25%</li>
                                                                <li className="product_mark product_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Slider Item */}
                                                    <div className="arrivals_slider_item">
                                                        <div className="border_active" />
                                                        <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_2.jpg" alt="" /></div>
                                                            <div className="product_content">
                                                                <div className="product_price">$379</div>
                                                                <div className="product_name">
                                                                    <div><a href="product.html">Transcend T.Sonic</a></div>
                                                                </div>
                                                                <div className="product_extras">
                                                                    <div className="product_color">
                                                                        <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                    </div>
                                                                    <button className="product_cart_button active">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <div className="product_fav"><i className="fas fa-heart" /></div>
                                                            <ul className="product_marks">
                                                                <li className="product_mark product_discount" />
                                                                <li className="product_mark product_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Slider Item */}
                                                    <div className="arrivals_slider_item">
                                                        <div className="border_active" />
                                                        <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_3.jpg" alt="" /></div>
                                                            <div className="product_content">
                                                                <div className="product_price">$379</div>
                                                                <div className="product_name">
                                                                    <div><a href="product.html">Xiaomi Band 2...</a></div>
                                                                </div>
                                                                <div className="product_extras">
                                                                    <div className="product_color">
                                                                        <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                    </div>
                                                                    <button className="product_cart_button">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <div className="product_fav"><i className="fas fa-heart" /></div>
                                                            <ul className="product_marks">
                                                                <li className="product_mark product_discount" />
                                                                <li className="product_mark product_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Slider Item */}
                                                    <div className="arrivals_slider_item">
                                                        <div className="border_active" />
                                                        <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_4.jpg" alt="" /></div>
                                                            <div className="product_content">
                                                                <div className="product_price">$225</div>
                                                                <div className="product_name">
                                                                    <div><a href="product.html">Rapoo T8 White</a></div>
                                                                </div>
                                                                <div className="product_extras">
                                                                    <div className="product_color">
                                                                        <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                    </div>
                                                                    <button className="product_cart_button">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <div className="product_fav"><i className="fas fa-heart" /></div>
                                                            <ul className="product_marks">
                                                                <li className="product_mark product_discount" />
                                                                <li className="product_mark product_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Slider Item */}
                                                    <div className="arrivals_slider_item">
                                                        <div className="border_active" />
                                                        <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_5.jpg" alt="" /></div>
                                                            <div className="product_content">
                                                                <div className="product_price">$225</div>
                                                                <div className="product_name">
                                                                    <div><a href="product.html">Philips BT6900A</a></div>
                                                                </div>
                                                                <div className="product_extras">
                                                                    <div className="product_color">
                                                                        <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                    </div>
                                                                    <button className="product_cart_button">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <div className="product_fav"><i className="fas fa-heart" /></div>
                                                            <ul className="product_marks">
                                                                <li className="product_mark product_discount" />
                                                                <li className="product_mark product_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Slider Item */}
                                                    <div className="arrivals_slider_item">
                                                        <div className="border_active" />
                                                        <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_6.jpg" alt="" /></div>
                                                            <div className="product_content">
                                                                <div className="product_price">$379</div>
                                                                <div className="product_name">
                                                                    <div><a href="product.html">Nokia 3310(2017)...</a></div>
                                                                </div>
                                                                <div className="product_extras">
                                                                    <div className="product_color">
                                                                        <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                    </div>
                                                                    <button className="product_cart_button">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <div className="product_fav"><i className="fas fa-heart" /></div>
                                                            <ul className="product_marks">
                                                                <li className="product_mark product_discount" />
                                                                <li className="product_mark product_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Slider Item */}
                                                    <div className="arrivals_slider_item">
                                                        <div className="border_active" />
                                                        <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_7.jpg" alt="" /></div>
                                                            <div className="product_content">
                                                                <div className="product_price">$379</div>
                                                                <div className="product_name">
                                                                    <div><a href="product.html">Rapoo 7100p Gray</a></div>
                                                                </div>
                                                                <div className="product_extras">
                                                                    <div className="product_color">
                                                                        <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                    </div>
                                                                    <button className="product_cart_button">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <div className="product_fav"><i className="fas fa-heart" /></div>
                                                            <ul className="product_marks">
                                                                <li className="product_mark product_discount">-25%</li>
                                                                <li className="product_mark product_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Slider Item */}
                                                    <div className="arrivals_slider_item">
                                                        <div className="border_active" />
                                                        <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_8.jpg" alt="" /></div>
                                                            <div className="product_content">
                                                                <div className="product_price">$225</div>
                                                                <div className="product_name">
                                                                    <div><a href="product.html">Canon EF</a></div>
                                                                </div>
                                                                <div className="product_extras">
                                                                    <div className="product_color">
                                                                        <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                    </div>
                                                                    <button className="product_cart_button">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <div className="product_fav"><i className="fas fa-heart" /></div>
                                                            <ul className="product_marks">
                                                                <li className="product_mark product_discount" />
                                                                <li className="product_mark product_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Slider Item */}
                                                    <div className="arrivals_slider_item">
                                                        <div className="border_active" />
                                                        <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_1.jpg" alt="" /></div>
                                                            <div className="product_content">
                                                                <div className="product_price">$225</div>
                                                                <div className="product_name">
                                                                    <div><a href="product.html">Gembird SPK-103</a></div>
                                                                </div>
                                                                <div className="product_extras">
                                                                    <div className="product_color">
                                                                        <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                    </div>
                                                                    <button className="product_cart_button">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <div className="product_fav"><i className="fas fa-heart" /></div>
                                                            <ul className="product_marks">
                                                                <li className="product_mark product_discount" />
                                                                <li className="product_mark product_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Slider Item */}
                                                    <div className="arrivals_slider_item">
                                                        <div className="border_active" />
                                                        <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_2.jpg" alt="" /></div>
                                                            <div className="product_content">
                                                                <div className="product_price">$379</div>
                                                                <div className="product_name">
                                                                    <div><a href="product.html">Canon IXUS 175...</a></div>
                                                                </div>
                                                                <div className="product_extras">
                                                                    <div className="product_color">
                                                                        <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                    </div>
                                                                    <button className="product_cart_button">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <div className="product_fav"><i className="fas fa-heart" /></div>
                                                            <ul className="product_marks">
                                                                <li className="product_mark product_discount" />
                                                                <li className="product_mark product_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Slider Item */}
                                                    <div className="arrivals_slider_item">
                                                        <div className="border_active" />
                                                        <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_3.jpg" alt="" /></div>
                                                            <div className="product_content">
                                                                <div className="product_price">$379</div>
                                                                <div className="product_name">
                                                                    <div><a href="product.html">Huawei MediaPad...</a></div>
                                                                </div>
                                                                <div className="product_extras">
                                                                    <div className="product_color">
                                                                        <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                    </div>
                                                                    <button className="product_cart_button">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <div className="product_fav"><i className="fas fa-heart" /></div>
                                                            <ul className="product_marks">
                                                                <li className="product_mark product_discount" />
                                                                <li className="product_mark product_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Slider Item */}
                                                    <div className="arrivals_slider_item">
                                                        <div className="border_active" />
                                                        <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_4.jpg" alt="" /></div>
                                                            <div className="product_content">
                                                                <div className="product_price">$225</div>
                                                                <div className="product_name">
                                                                    <div><a href="product.html">Huawei MediaPad...</a></div>
                                                                </div>
                                                                <div className="product_extras">
                                                                    <div className="product_color">
                                                                        <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                    </div>
                                                                    <button className="product_cart_button">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <div className="product_fav"><i className="fas fa-heart" /></div>
                                                            <ul className="product_marks">
                                                                <li className="product_mark product_discount" />
                                                                <li className="product_mark product_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Slider Item */}
                                                    <div className="arrivals_slider_item">
                                                        <div className="border_active" />
                                                        <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_5.jpg" alt="" /></div>
                                                            <div className="product_content">
                                                                <div className="product_price">$225</div>
                                                                <div className="product_name">
                                                                    <div><a href="product.html">Huawei MediaPad...</a></div>
                                                                </div>
                                                                <div className="product_extras">
                                                                    <div className="product_color">
                                                                        <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                    </div>
                                                                    <button className="product_cart_button">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <div className="product_fav"><i className="fas fa-heart" /></div>
                                                            <ul className="product_marks">
                                                                <li className="product_mark product_discount" />
                                                                <li className="product_mark product_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Slider Item */}
                                                    <div className="arrivals_slider_item">
                                                        <div className="border_active" />
                                                        <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_6.jpg" alt="" /></div>
                                                            <div className="product_content">
                                                                <div className="product_price">$379</div>
                                                                <div className="product_name">
                                                                    <div><a href="product.html">Huawei MediaPad...</a></div>
                                                                </div>
                                                                <div className="product_extras">
                                                                    <div className="product_color">
                                                                        <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                    </div>
                                                                    <button className="product_cart_button">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <div className="product_fav"><i className="fas fa-heart" /></div>
                                                            <ul className="product_marks">
                                                                <li className="product_mark product_discount" />
                                                                <li className="product_mark product_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Slider Item */}
                                                    <div className="arrivals_slider_item">
                                                        <div className="border_active" />
                                                        <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_7.jpg" alt="" /></div>
                                                            <div className="product_content">
                                                                <div className="product_price">$379</div>
                                                                <div className="product_name">
                                                                    <div><a href="product.html">Huawei MediaPad...</a></div>
                                                                </div>
                                                                <div className="product_extras">
                                                                    <div className="product_color">
                                                                        <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                    </div>
                                                                    <button className="product_cart_button">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <div className="product_fav"><i className="fas fa-heart" /></div>
                                                            <ul className="product_marks">
                                                                <li className="product_mark product_discount" />
                                                                <li className="product_mark product_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Slider Item */}
                                                    <div className="arrivals_slider_item">
                                                        <div className="border_active" />
                                                        <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_8.jpg" alt="" /></div>
                                                            <div className="product_content">
                                                                <div className="product_price">$225</div>
                                                                <div className="product_name">
                                                                    <div><a href="product.html">Huawei MediaPad...</a></div>
                                                                </div>
                                                                <div className="product_extras">
                                                                    <div className="product_color">
                                                                        <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                    </div>
                                                                    <button className="product_cart_button">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <div className="product_fav"><i className="fas fa-heart" /></div>
                                                            <ul className="product_marks">
                                                                <li className="product_mark product_discount" />
                                                                <li className="product_mark product_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="arrivals_slider_dots_cover" />
                                            </div>
                                            {/* Product Panel */}
                                            <div className="product_panel panel">
                                                <div className="arrivals_slider slider">
                                                    {/* Slider Item */}
                                                    <div className="arrivals_slider_item">
                                                        <div className="border_active" />
                                                        <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_1.jpg" alt="" /></div>
                                                            <div className="product_content">
                                                                <div className="product_price">$225</div>
                                                                <div className="product_name">
                                                                    <div><a href="product.html">Huawei MediaPad...</a></div>
                                                                </div>
                                                                <div className="product_extras">
                                                                    <div className="product_color">
                                                                        <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                    </div>
                                                                    <button className="product_cart_button">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <div className="product_fav"><i className="fas fa-heart" /></div>
                                                            <ul className="product_marks">
                                                                <li className="product_mark product_discount">-25%</li>
                                                                <li className="product_mark product_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Slider Item */}
                                                    <div className="arrivals_slider_item">
                                                        <div className="border_active" />
                                                        <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_2.jpg" alt="" /></div>
                                                            <div className="product_content">
                                                                <div className="product_price">$379</div>
                                                                <div className="product_name">
                                                                    <div><a href="product.html">Huawei MediaPad...</a></div>
                                                                </div>
                                                                <div className="product_extras">
                                                                    <div className="product_color">
                                                                        <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                    </div>
                                                                    <button className="product_cart_button active">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <div className="product_fav"><i className="fas fa-heart" /></div>
                                                            <ul className="product_marks">
                                                                <li className="product_mark product_discount" />
                                                                <li className="product_mark product_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Slider Item */}
                                                    <div className="arrivals_slider_item">
                                                        <div className="border_active" />
                                                        <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_3.jpg" alt="" /></div>
                                                            <div className="product_content">
                                                                <div className="product_price">$379</div>
                                                                <div className="product_name">
                                                                    <div><a href="product.html">Huawei MediaPad...</a></div>
                                                                </div>
                                                                <div className="product_extras">
                                                                    <div className="product_color">
                                                                        <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                    </div>
                                                                    <button className="product_cart_button">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <div className="product_fav"><i className="fas fa-heart" /></div>
                                                            <ul className="product_marks">
                                                                <li className="product_mark product_discount" />
                                                                <li className="product_mark product_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Slider Item */}
                                                    <div className="arrivals_slider_item">
                                                        <div className="border_active" />
                                                        <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_4.jpg" alt="" /></div>
                                                            <div className="product_content">
                                                                <div className="product_price">$225</div>
                                                                <div className="product_name">
                                                                    <div><a href="product.html">Huawei MediaPad...</a></div>
                                                                </div>
                                                                <div className="product_extras">
                                                                    <div className="product_color">
                                                                        <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                    </div>
                                                                    <button className="product_cart_button">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <div className="product_fav"><i className="fas fa-heart" /></div>
                                                            <ul className="product_marks">
                                                                <li className="product_mark product_discount" />
                                                                <li className="product_mark product_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Slider Item */}
                                                    <div className="arrivals_slider_item">
                                                        <div className="border_active" />
                                                        <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_5.jpg" alt="" /></div>
                                                            <div className="product_content">
                                                                <div className="product_price">$225</div>
                                                                <div className="product_name">
                                                                    <div><a href="product.html">Huawei MediaPad...</a></div>
                                                                </div>
                                                                <div className="product_extras">
                                                                    <div className="product_color">
                                                                        <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                    </div>
                                                                    <button className="product_cart_button">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <div className="product_fav"><i className="fas fa-heart" /></div>
                                                            <ul className="product_marks">
                                                                <li className="product_mark product_discount" />
                                                                <li className="product_mark product_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Slider Item */}
                                                    <div className="arrivals_slider_item">
                                                        <div className="border_active" />
                                                        <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_6.jpg" alt="" /></div>
                                                            <div className="product_content">
                                                                <div className="product_price">$379</div>
                                                                <div className="product_name">
                                                                    <div><a href="product.html">Huawei MediaPad...</a></div>
                                                                </div>
                                                                <div className="product_extras">
                                                                    <div className="product_color">
                                                                        <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                    </div>
                                                                    <button className="product_cart_button">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <div className="product_fav"><i className="fas fa-heart" /></div>
                                                            <ul className="product_marks">
                                                                <li className="product_mark product_discount" />
                                                                <li className="product_mark product_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Slider Item */}
                                                    <div className="arrivals_slider_item">
                                                        <div className="border_active" />
                                                        <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_7.jpg" alt="" /></div>
                                                            <div className="product_content">
                                                                <div className="product_price">$379</div>
                                                                <div className="product_name">
                                                                    <div><a href="product.html">Huawei MediaPad...</a></div>
                                                                </div>
                                                                <div className="product_extras">
                                                                    <div className="product_color">
                                                                        <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                    </div>
                                                                    <button className="product_cart_button">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <div className="product_fav"><i className="fas fa-heart" /></div>
                                                            <ul className="product_marks">
                                                                <li className="product_mark product_discount">-25%</li>
                                                                <li className="product_mark product_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Slider Item */}
                                                    <div className="arrivals_slider_item">
                                                        <div className="border_active" />
                                                        <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_8.jpg" alt="" /></div>
                                                            <div className="product_content">
                                                                <div className="product_price">$225</div>
                                                                <div className="product_name">
                                                                    <div><a href="product.html">Huawei MediaPad...</a></div>
                                                                </div>
                                                                <div className="product_extras">
                                                                    <div className="product_color">
                                                                        <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                    </div>
                                                                    <button className="product_cart_button">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <div className="product_fav"><i className="fas fa-heart" /></div>
                                                            <ul className="product_marks">
                                                                <li className="product_mark product_discount" />
                                                                <li className="product_mark product_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Slider Item */}
                                                    <div className="arrivals_slider_item">
                                                        <div className="border_active" />
                                                        <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_1.jpg" alt="" /></div>
                                                            <div className="product_content">
                                                                <div className="product_price">$225</div>
                                                                <div className="product_name">
                                                                    <div><a href="product.html">Huawei MediaPad...</a></div>
                                                                </div>
                                                                <div className="product_extras">
                                                                    <div className="product_color">
                                                                        <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                    </div>
                                                                    <button className="product_cart_button">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <div className="product_fav"><i className="fas fa-heart" /></div>
                                                            <ul className="product_marks">
                                                                <li className="product_mark product_discount" />
                                                                <li className="product_mark product_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Slider Item */}
                                                    <div className="arrivals_slider_item">
                                                        <div className="border_active" />
                                                        <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_2.jpg" alt="" /></div>
                                                            <div className="product_content">
                                                                <div className="product_price">$379</div>
                                                                <div className="product_name">
                                                                    <div><a href="product.html">Huawei MediaPad...</a></div>
                                                                </div>
                                                                <div className="product_extras">
                                                                    <div className="product_color">
                                                                        <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                    </div>
                                                                    <button className="product_cart_button">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <div className="product_fav"><i className="fas fa-heart" /></div>
                                                            <ul className="product_marks">
                                                                <li className="product_mark product_discount" />
                                                                <li className="product_mark product_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Slider Item */}
                                                    <div className="arrivals_slider_item">
                                                        <div className="border_active" />
                                                        <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_3.jpg" alt="" /></div>
                                                            <div className="product_content">
                                                                <div className="product_price">$379</div>
                                                                <div className="product_name">
                                                                    <div><a href="product.html">Huawei MediaPad...</a></div>
                                                                </div>
                                                                <div className="product_extras">
                                                                    <div className="product_color">
                                                                        <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                    </div>
                                                                    <button className="product_cart_button">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <div className="product_fav"><i className="fas fa-heart" /></div>
                                                            <ul className="product_marks">
                                                                <li className="product_mark product_discount" />
                                                                <li className="product_mark product_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Slider Item */}
                                                    <div className="arrivals_slider_item">
                                                        <div className="border_active" />
                                                        <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_4.jpg" alt="" /></div>
                                                            <div className="product_content">
                                                                <div className="product_price">$225</div>
                                                                <div className="product_name">
                                                                    <div><a href="product.html">Huawei MediaPad...</a></div>
                                                                </div>
                                                                <div className="product_extras">
                                                                    <div className="product_color">
                                                                        <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                    </div>
                                                                    <button className="product_cart_button">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <div className="product_fav"><i className="fas fa-heart" /></div>
                                                            <ul className="product_marks">
                                                                <li className="product_mark product_discount" />
                                                                <li className="product_mark product_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Slider Item */}
                                                    <div className="arrivals_slider_item">
                                                        <div className="border_active" />
                                                        <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_5.jpg" alt="" /></div>
                                                            <div className="product_content">
                                                                <div className="product_price">$225</div>
                                                                <div className="product_name">
                                                                    <div><a href="product.html">Huawei MediaPad...</a></div>
                                                                </div>
                                                                <div className="product_extras">
                                                                    <div className="product_color">
                                                                        <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                    </div>
                                                                    <button className="product_cart_button">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <div className="product_fav"><i className="fas fa-heart" /></div>
                                                            <ul className="product_marks">
                                                                <li className="product_mark product_discount" />
                                                                <li className="product_mark product_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Slider Item */}
                                                    <div className="arrivals_slider_item">
                                                        <div className="border_active" />
                                                        <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_6.jpg" alt="" /></div>
                                                            <div className="product_content">
                                                                <div className="product_price">$379</div>
                                                                <div className="product_name">
                                                                    <div><a href="product.html">Huawei MediaPad...</a></div>
                                                                </div>
                                                                <div className="product_extras">
                                                                    <div className="product_color">
                                                                        <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                    </div>
                                                                    <button className="product_cart_button">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <div className="product_fav"><i className="fas fa-heart" /></div>
                                                            <ul className="product_marks">
                                                                <li className="product_mark product_discount" />
                                                                <li className="product_mark product_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Slider Item */}
                                                    <div className="arrivals_slider_item">
                                                        <div className="border_active" />
                                                        <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_7.jpg" alt="" /></div>
                                                            <div className="product_content">
                                                                <div className="product_price">$379</div>
                                                                <div className="product_name">
                                                                    <div><a href="product.html">Huawei MediaPad...</a></div>
                                                                </div>
                                                                <div className="product_extras">
                                                                    <div className="product_color">
                                                                        <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                    </div>
                                                                    <button className="product_cart_button">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <div className="product_fav"><i className="fas fa-heart" /></div>
                                                            <ul className="product_marks">
                                                                <li className="product_mark product_discount" />
                                                                <li className="product_mark product_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Slider Item */}
                                                    <div className="arrivals_slider_item">
                                                        <div className="border_active" />
                                                        <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_8.jpg" alt="" /></div>
                                                            <div className="product_content">
                                                                <div className="product_price">$225</div>
                                                                <div className="product_name">
                                                                    <div><a href="product.html">Huawei MediaPad...</a></div>
                                                                </div>
                                                                <div className="product_extras">
                                                                    <div className="product_color">
                                                                        <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                    </div>
                                                                    <button className="product_cart_button">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <div className="product_fav"><i className="fas fa-heart" /></div>
                                                            <ul className="product_marks">
                                                                <li className="product_mark product_discount" />
                                                                <li className="product_mark product_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="arrivals_slider_dots_cover" />
                                            </div>
                                            {/* Product Panel */}
                                            <div className="product_panel panel">
                                                <div className="arrivals_slider slider">
                                                    {/* Slider Item */}
                                                    <div className="arrivals_slider_item">
                                                        <div className="border_active" />
                                                        <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_1.jpg" alt="" /></div>
                                                            <div className="product_content">
                                                                <div className="product_price">$225</div>
                                                                <div className="product_name">
                                                                    <div><a href="product.html">Huawei MediaPad...</a></div>
                                                                </div>
                                                                <div className="product_extras">
                                                                    <div className="product_color">
                                                                        <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                    </div>
                                                                    <button className="product_cart_button">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <div className="product_fav"><i className="fas fa-heart" /></div>
                                                            <ul className="product_marks">
                                                                <li className="product_mark product_discount">-25%</li>
                                                                <li className="product_mark product_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Slider Item */}
                                                    <div className="arrivals_slider_item">
                                                        <div className="border_active" />
                                                        <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_2.jpg" alt="" /></div>
                                                            <div className="product_content">
                                                                <div className="product_price">$379</div>
                                                                <div className="product_name">
                                                                    <div><a href="product.html">Huawei MediaPad...</a></div>
                                                                </div>
                                                                <div className="product_extras">
                                                                    <div className="product_color">
                                                                        <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                    </div>
                                                                    <button className="product_cart_button active">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <div className="product_fav"><i className="fas fa-heart" /></div>
                                                            <ul className="product_marks">
                                                                <li className="product_mark product_discount" />
                                                                <li className="product_mark product_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Slider Item */}
                                                    <div className="arrivals_slider_item">
                                                        <div className="border_active" />
                                                        <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_3.jpg" alt="" /></div>
                                                            <div className="product_content">
                                                                <div className="product_price">$379</div>
                                                                <div className="product_name">
                                                                    <div><a href="product.html">Huawei MediaPad...</a></div>
                                                                </div>
                                                                <div className="product_extras">
                                                                    <div className="product_color">
                                                                        <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                    </div>
                                                                    <button className="product_cart_button">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <div className="product_fav"><i className="fas fa-heart" /></div>
                                                            <ul className="product_marks">
                                                                <li className="product_mark product_discount" />
                                                                <li className="product_mark product_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Slider Item */}
                                                    <div className="arrivals_slider_item">
                                                        <div className="border_active" />
                                                        <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_4.jpg" alt="" /></div>
                                                            <div className="product_content">
                                                                <div className="product_price">$225</div>
                                                                <div className="product_name">
                                                                    <div><a href="product.html">Huawei MediaPad...</a></div>
                                                                </div>
                                                                <div className="product_extras">
                                                                    <div className="product_color">
                                                                        <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                    </div>
                                                                    <button className="product_cart_button">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <div className="product_fav"><i className="fas fa-heart" /></div>
                                                            <ul className="product_marks">
                                                                <li className="product_mark product_discount" />
                                                                <li className="product_mark product_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Slider Item */}
                                                    <div className="arrivals_slider_item">
                                                        <div className="border_active" />
                                                        <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_5.jpg" alt="" /></div>
                                                            <div className="product_content">
                                                                <div className="product_price">$225</div>
                                                                <div className="product_name">
                                                                    <div><a href="product.html">Huawei MediaPad...</a></div>
                                                                </div>
                                                                <div className="product_extras">
                                                                    <div className="product_color">
                                                                        <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                    </div>
                                                                    <button className="product_cart_button">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <div className="product_fav"><i className="fas fa-heart" /></div>
                                                            <ul className="product_marks">
                                                                <li className="product_mark product_discount" />
                                                                <li className="product_mark product_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Slider Item */}
                                                    <div className="arrivals_slider_item">
                                                        <div className="border_active" />
                                                        <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_6.jpg" alt="" /></div>
                                                            <div className="product_content">
                                                                <div className="product_price">$379</div>
                                                                <div className="product_name">
                                                                    <div><a href="product.html">Huawei MediaPad...</a></div>
                                                                </div>
                                                                <div className="product_extras">
                                                                    <div className="product_color">
                                                                        <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                    </div>
                                                                    <button className="product_cart_button">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <div className="product_fav"><i className="fas fa-heart" /></div>
                                                            <ul className="product_marks">
                                                                <li className="product_mark product_discount" />
                                                                <li className="product_mark product_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Slider Item */}
                                                    <div className="arrivals_slider_item">
                                                        <div className="border_active" />
                                                        <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_7.jpg" alt="" /></div>
                                                            <div className="product_content">
                                                                <div className="product_price">$379</div>
                                                                <div className="product_name">
                                                                    <div><a href="product.html">Huawei MediaPad...</a></div>
                                                                </div>
                                                                <div className="product_extras">
                                                                    <div className="product_color">
                                                                        <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                    </div>
                                                                    <button className="product_cart_button">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <div className="product_fav"><i className="fas fa-heart" /></div>
                                                            <ul className="product_marks">
                                                                <li className="product_mark product_discount">-25%</li>
                                                                <li className="product_mark product_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Slider Item */}
                                                    <div className="arrivals_slider_item">
                                                        <div className="border_active" />
                                                        <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_8.jpg" alt="" /></div>
                                                            <div className="product_content">
                                                                <div className="product_price">$225</div>
                                                                <div className="product_name">
                                                                    <div><a href="product.html">Huawei MediaPad...</a></div>
                                                                </div>
                                                                <div className="product_extras">
                                                                    <div className="product_color">
                                                                        <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                    </div>
                                                                    <button className="product_cart_button">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <div className="product_fav"><i className="fas fa-heart" /></div>
                                                            <ul className="product_marks">
                                                                <li className="product_mark product_discount" />
                                                                <li className="product_mark product_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Slider Item */}
                                                    <div className="arrivals_slider_item">
                                                        <div className="border_active" />
                                                        <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_1.jpg" alt="" /></div>
                                                            <div className="product_content">
                                                                <div className="product_price">$225</div>
                                                                <div className="product_name">
                                                                    <div><a href="product.html">Huawei MediaPad...</a></div>
                                                                </div>
                                                                <div className="product_extras">
                                                                    <div className="product_color">
                                                                        <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                    </div>
                                                                    <button className="product_cart_button">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <div className="product_fav"><i className="fas fa-heart" /></div>
                                                            <ul className="product_marks">
                                                                <li className="product_mark product_discount" />
                                                                <li className="product_mark product_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Slider Item */}
                                                    <div className="arrivals_slider_item">
                                                        <div className="border_active" />
                                                        <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_2.jpg" alt="" /></div>
                                                            <div className="product_content">
                                                                <div className="product_price">$379</div>
                                                                <div className="product_name">
                                                                    <div><a href="product.html">Huawei MediaPad...</a></div>
                                                                </div>
                                                                <div className="product_extras">
                                                                    <div className="product_color">
                                                                        <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                    </div>
                                                                    <button className="product_cart_button">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <div className="product_fav"><i className="fas fa-heart" /></div>
                                                            <ul className="product_marks">
                                                                <li className="product_mark product_discount" />
                                                                <li className="product_mark product_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Slider Item */}
                                                    <div className="arrivals_slider_item">
                                                        <div className="border_active" />
                                                        <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_3.jpg" alt="" /></div>
                                                            <div className="product_content">
                                                                <div className="product_price">$379</div>
                                                                <div className="product_name">
                                                                    <div><a href="product.html">Huawei MediaPad...</a></div>
                                                                </div>
                                                                <div className="product_extras">
                                                                    <div className="product_color">
                                                                        <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                    </div>
                                                                    <button className="product_cart_button">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <div className="product_fav"><i className="fas fa-heart" /></div>
                                                            <ul className="product_marks">
                                                                <li className="product_mark product_discount" />
                                                                <li className="product_mark product_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Slider Item */}
                                                    <div className="arrivals_slider_item">
                                                        <div className="border_active" />
                                                        <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_4.jpg" alt="" /></div>
                                                            <div className="product_content">
                                                                <div className="product_price">$225</div>
                                                                <div className="product_name">
                                                                    <div><a href="product.html">Huawei MediaPad...</a></div>
                                                                </div>
                                                                <div className="product_extras">
                                                                    <div className="product_color">
                                                                        <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                    </div>
                                                                    <button className="product_cart_button">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <div className="product_fav"><i className="fas fa-heart" /></div>
                                                            <ul className="product_marks">
                                                                <li className="product_mark product_discount" />
                                                                <li className="product_mark product_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Slider Item */}
                                                    <div className="arrivals_slider_item">
                                                        <div className="border_active" />
                                                        <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_5.jpg" alt="" /></div>
                                                            <div className="product_content">
                                                                <div className="product_price">$225</div>
                                                                <div className="product_name">
                                                                    <div><a href="product.html">Huawei MediaPad...</a></div>
                                                                </div>
                                                                <div className="product_extras">
                                                                    <div className="product_color">
                                                                        <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                    </div>
                                                                    <button className="product_cart_button">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <div className="product_fav"><i className="fas fa-heart" /></div>
                                                            <ul className="product_marks">
                                                                <li className="product_mark product_discount" />
                                                                <li className="product_mark product_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Slider Item */}
                                                    <div className="arrivals_slider_item">
                                                        <div className="border_active" />
                                                        <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_6.jpg" alt="" /></div>
                                                            <div className="product_content">
                                                                <div className="product_price">$379</div>
                                                                <div className="product_name">
                                                                    <div><a href="product.html">Huawei MediaPad...</a></div>
                                                                </div>
                                                                <div className="product_extras">
                                                                    <div className="product_color">
                                                                        <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                    </div>
                                                                    <button className="product_cart_button">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <div className="product_fav"><i className="fas fa-heart" /></div>
                                                            <ul className="product_marks">
                                                                <li className="product_mark product_discount" />
                                                                <li className="product_mark product_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Slider Item */}
                                                    <div className="arrivals_slider_item">
                                                        <div className="border_active" />
                                                        <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_7.jpg" alt="" /></div>
                                                            <div className="product_content">
                                                                <div className="product_price">$379</div>
                                                                <div className="product_name">
                                                                    <div><a href="product.html">Huawei MediaPad...</a></div>
                                                                </div>
                                                                <div className="product_extras">
                                                                    <div className="product_color">
                                                                        <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                    </div>
                                                                    <button className="product_cart_button">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <div className="product_fav"><i className="fas fa-heart" /></div>
                                                            <ul className="product_marks">
                                                                <li className="product_mark product_discount" />
                                                                <li className="product_mark product_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Slider Item */}
                                                    <div className="arrivals_slider_item">
                                                        <div className="border_active" />
                                                        <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_8.jpg" alt="" /></div>
                                                            <div className="product_content">
                                                                <div className="product_price">$225</div>
                                                                <div className="product_name">
                                                                    <div><a href="product.html">Huawei MediaPad...</a></div>
                                                                </div>
                                                                <div className="product_extras">
                                                                    <div className="product_color">
                                                                        <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                        <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                    </div>
                                                                    <button className="product_cart_button">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <div className="product_fav"><i className="fas fa-heart" /></div>
                                                            <ul className="product_marks">
                                                                <li className="product_mark product_discount" />
                                                                <li className="product_mark product_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="arrivals_slider_dots_cover" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="arrivals_single clearfix">
                                                <div className="d-flex flex-column align-items-center justify-content-center">
                                                    <div className="arrivals_single_image"><img src="images/new_single.png" alt="" /></div>
                                                    <div className="arrivals_single_content">
                                                        <div className="arrivals_single_category"><a href="##">Smartphones</a></div>
                                                        <div className="arrivals_single_name_container clearfix">
                                                            <div className="arrivals_single_name"><a href="##">LUNA Smartphone</a></div>
                                                            <div className="arrivals_single_price text-right">$379</div>
                                                        </div>
                                                        <div className="rating_r rating_r_4 arrivals_single_rating"><i /><i /><i /><i /><i />
                                                        </div>
                                                        <form action="#"><button className="arrivals_single_button">Add to Cart</button></form>
                                                    </div>
                                                    <div className="arrivals_single_fav product_fav active"><i className="fas fa-heart" /></div>
                                                    <ul className="arrivals_single_marks product_marks">
                                                        <li className="arrivals_single_mark product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Best Sellers */}
                <div className="best_sellers">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="tabbed_container">
                                    <div className="tabs clearfix tabs-right">
                                        <div className="new_arrivals_title">Hot Best Sellers</div>
                                        <ul className="clearfix">
                                            <li className="active">Top 20</li>
                                            <li>Audio &amp; Video</li>
                                            <li>Laptops &amp; Computers</li>
                                        </ul>
                                        <div className="tabs_line"><span /></div>
                                    </div>
                                    <div className="bestsellers_panel panel active">
                                        {/* Best Sellers Slider */}
                                        <div className="bestsellers_slider slider">
                                            {/* Best Sellers Item */}
                                            <div className="bestsellers_item discount">
                                                <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                    <div className="bestsellers_image"><img src="images/best_1.png" alt="" /></div>
                                                    <div className="bestsellers_content">
                                                        <div className="bestsellers_category"><a href="##">Headphones</a></div>
                                                        <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                        <div className="rating_r rating_r_4 bestsellers_rating"><i /><i /><i /><i /><i /></div>
                                                        <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                    </div>
                                                </div>
                                                <div className="bestsellers_fav active"><i className="fas fa-heart" /></div>
                                                <ul className="bestsellers_marks">
                                                    <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                    <li className="bestsellers_mark bestsellers_new">new</li>
                                                </ul>
                                            </div>
                                            {/* Best Sellers Item */}
                                            <div className="bestsellers_item discount">
                                                <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                    <div className="bestsellers_image"><img src="images/best_2.png" alt="" /></div>
                                                    <div className="bestsellers_content">
                                                        <div className="bestsellers_category"><a href="##">Headphones</a></div>
                                                        <div className="bestsellers_name"><a href="product.html">Samsung J730F...</a></div>
                                                        <div className="rating_r rating_r_4 bestsellers_rating"><i /><i /><i /><i /><i /></div>
                                                        <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                    </div>
                                                </div>
                                                <div className="bestsellers_fav"><i className="fas fa-heart" /></div>
                                                <ul className="bestsellers_marks">
                                                    <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                    <li className="bestsellers_mark bestsellers_new">new</li>
                                                </ul>
                                            </div>
                                            {/* Best Sellers Item */}
                                            <div className="bestsellers_item">
                                                <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                    <div className="bestsellers_image"><img src="images/best_3.png" alt="" /></div>
                                                    <div className="bestsellers_content">
                                                        <div className="bestsellers_category"><a href="##">Headphones</a></div>
                                                        <div className="bestsellers_name"><a href="product.html">Nomi Black White</a></div>
                                                        <div className="rating_r rating_r_4 bestsellers_rating"><i /><i /><i /><i /><i /></div>
                                                        <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                    </div>
                                                </div>
                                                <div className="bestsellers_fav"><i className="fas fa-heart" /></div>
                                                <ul className="bestsellers_marks">
                                                    <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                    <li className="bestsellers_mark bestsellers_new">new</li>
                                                </ul>
                                            </div>
                                            {/* Best Sellers Item */}
                                            <div className="bestsellers_item">
                                                <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                    <div className="bestsellers_image"><img src="images/best_4.png" alt="" /></div>
                                                    <div className="bestsellers_content">
                                                        <div className="bestsellers_category"><a href="##">Headphones</a></div>
                                                        <div className="bestsellers_name"><a href="product.html">Samsung Charm Gold</a></div>
                                                        <div className="rating_r rating_r_4 bestsellers_rating"><i /><i /><i /><i /><i /></div>
                                                        <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                    </div>
                                                </div>
                                                <div className="bestsellers_fav"><i className="fas fa-heart" /></div>
                                                <ul className="bestsellers_marks">
                                                    <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                    <li className="bestsellers_mark bestsellers_new">new</li>
                                                </ul>
                                            </div>
                                            {/* Best Sellers Item */}
                                            <div className="bestsellers_item discount">
                                                <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                    <div className="bestsellers_image"><img src="images/best_5.png" alt="" /></div>
                                                    <div className="bestsellers_content">
                                                        <div className="bestsellers_category"><a href="##">Headphones</a></div>
                                                        <div className="bestsellers_name"><a href="product.html">Beoplay H7</a></div>
                                                        <div className="rating_r rating_r_4 bestsellers_rating"><i /><i /><i /><i /><i /></div>
                                                        <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                    </div>
                                                </div>
                                                <div className="bestsellers_fav active"><i className="fas fa-heart" /></div>
                                                <ul className="bestsellers_marks">
                                                    <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                    <li className="bestsellers_mark bestsellers_new">new</li>
                                                </ul>
                                            </div>
                                            {/* Best Sellers Item */}
                                            <div className="bestsellers_item">
                                                <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                    <div className="bestsellers_image"><img src="images/best_6.png" alt="" /></div>
                                                    <div className="bestsellers_content">
                                                        <div className="bestsellers_category"><a href="##">Headphones</a></div>
                                                        <div className="bestsellers_name"><a href="product.html">Huawei MediaPad T3</a></div>
                                                        <div className="rating_r rating_r_4 bestsellers_rating"><i /><i /><i /><i /><i /></div>
                                                        <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                    </div>
                                                </div>
                                                <div className="bestsellers_fav active"><i className="fas fa-heart" /></div>
                                                <ul className="bestsellers_marks">
                                                    <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                    <li className="bestsellers_mark bestsellers_new">new</li>
                                                </ul>
                                            </div>
                                            {/* Best Sellers Item */}
                                            <div className="bestsellers_item discount">
                                                <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                    <div className="bestsellers_image"><img src="images/best_1.png" alt="" /></div>
                                                    <div className="bestsellers_content">
                                                        <div className="bestsellers_category"><a href="##">Headphones</a></div>
                                                        <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                        <div className="rating_r rating_r_4 bestsellers_rating"><i /><i /><i /><i /><i /></div>
                                                        <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                    </div>
                                                </div>
                                                <div className="bestsellers_fav active"><i className="fas fa-heart" /></div>
                                                <ul className="bestsellers_marks">
                                                    <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                    <li className="bestsellers_mark bestsellers_new">new</li>
                                                </ul>
                                            </div>
                                            {/* Best Sellers Item */}
                                            <div className="bestsellers_item discount">
                                                <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                    <div className="bestsellers_image"><img src="images/best_2.png" alt="" /></div>
                                                    <div className="bestsellers_content">
                                                        <div className="bestsellers_category"><a href="##">Headphones</a></div>
                                                        <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                        <div className="rating_r rating_r_4 bestsellers_rating"><i /><i /><i /><i /><i /></div>
                                                        <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                    </div>
                                                </div>
                                                <div className="bestsellers_fav"><i className="fas fa-heart" /></div>
                                                <ul className="bestsellers_marks">
                                                    <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                    <li className="bestsellers_mark bestsellers_new">new</li>
                                                </ul>
                                            </div>
                                            {/* Best Sellers Item */}
                                            <div className="bestsellers_item">
                                                <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                    <div className="bestsellers_image"><img src="images/best_3.png" alt="" /></div>
                                                    <div className="bestsellers_content">
                                                        <div className="bestsellers_category"><a href="##">Headphones</a></div>
                                                        <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                        <div className="rating_r rating_r_4 bestsellers_rating"><i /><i /><i /><i /><i /></div>
                                                        <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                    </div>
                                                </div>
                                                <div className="bestsellers_fav"><i className="fas fa-heart" /></div>
                                                <ul className="bestsellers_marks">
                                                    <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                    <li className="bestsellers_mark bestsellers_new">new</li>
                                                </ul>
                                            </div>
                                            {/* Best Sellers Item */}
                                            <div className="bestsellers_item">
                                                <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                    <div className="bestsellers_image"><img src="images/best_4.png" alt="" /></div>
                                                    <div className="bestsellers_content">
                                                        <div className="bestsellers_category"><a href="##">Headphones</a></div>
                                                        <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                        <div className="rating_r rating_r_4 bestsellers_rating"><i /><i /><i /><i /><i /></div>
                                                        <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                    </div>
                                                </div>
                                                <div className="bestsellers_fav"><i className="fas fa-heart" /></div>
                                                <ul className="bestsellers_marks">
                                                    <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                    <li className="bestsellers_mark bestsellers_new">new</li>
                                                </ul>
                                            </div>
                                            {/* Best Sellers Item */}
                                            <div className="bestsellers_item discount">
                                                <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                    <div className="bestsellers_image"><img src="images/best_5.png" alt="" /></div>
                                                    <div className="bestsellers_content">
                                                        <div className="bestsellers_category"><a href="##">Headphones</a></div>
                                                        <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                        <div className="rating_r rating_r_4 bestsellers_rating"><i /><i /><i /><i /><i /></div>
                                                        <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                    </div>
                                                </div>
                                                <div className="bestsellers_fav active"><i className="fas fa-heart" /></div>
                                                <ul className="bestsellers_marks">
                                                    <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                    <li className="bestsellers_mark bestsellers_new">new</li>
                                                </ul>
                                            </div>
                                            {/* Best Sellers Item */}
                                            <div className="bestsellers_item">
                                                <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                    <div className="bestsellers_image"><img src="images/best_6.png" alt="" /></div>
                                                    <div className="bestsellers_content">
                                                        <div className="bestsellers_category"><a href="##">Headphones</a></div>
                                                        <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                        <div className="rating_r rating_r_4 bestsellers_rating"><i /><i /><i /><i /><i /></div>
                                                        <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                    </div>
                                                </div>
                                                <div className="bestsellers_fav active"><i className="fas fa-heart" /></div>
                                                <ul className="bestsellers_marks">
                                                    <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                    <li className="bestsellers_mark bestsellers_new">new</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bestsellers_panel panel">
                                        {/* Best Sellers Slider */}
                                        <div className="bestsellers_slider slider">
                                            {/* Best Sellers Item */}
                                            <div className="bestsellers_item discount">
                                                <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                    <div className="bestsellers_image"><img src="images/best_1.png" alt="" /></div>
                                                    <div className="bestsellers_content">
                                                        <div className="bestsellers_category"><a href="##">Headphones</a></div>
                                                        <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                        <div className="rating_r rating_r_4 bestsellers_rating"><i /><i /><i /><i /><i /></div>
                                                        <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                    </div>
                                                </div>
                                                <div className="bestsellers_fav active"><i className="fas fa-heart" /></div>
                                                <ul className="bestsellers_marks">
                                                    <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                    <li className="bestsellers_mark bestsellers_new">new</li>
                                                </ul>
                                            </div>
                                            {/* Best Sellers Item */}
                                            <div className="bestsellers_item discount">
                                                <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                    <div className="bestsellers_image"><img src="images/best_2.png" alt="" /></div>
                                                    <div className="bestsellers_content">
                                                        <div className="bestsellers_category"><a href="##">Headphones</a></div>
                                                        <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                        <div className="rating_r rating_r_4 bestsellers_rating"><i /><i /><i /><i /><i /></div>
                                                        <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                    </div>
                                                </div>
                                                <div className="bestsellers_fav"><i className="fas fa-heart" /></div>
                                                <ul className="bestsellers_marks">
                                                    <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                    <li className="bestsellers_mark bestsellers_new">new</li>
                                                </ul>
                                            </div>
                                            {/* Best Sellers Item */}
                                            <div className="bestsellers_item">
                                                <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                    <div className="bestsellers_image"><img src="images/best_3.png" alt="" /></div>
                                                    <div className="bestsellers_content">
                                                        <div className="bestsellers_category"><a href="##">Headphones</a></div>
                                                        <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                        <div className="rating_r rating_r_4 bestsellers_rating"><i /><i /><i /><i /><i /></div>
                                                        <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                    </div>
                                                </div>
                                                <div className="bestsellers_fav"><i className="fas fa-heart" /></div>
                                                <ul className="bestsellers_marks">
                                                    <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                    <li className="bestsellers_mark bestsellers_new">new</li>
                                                </ul>
                                            </div>
                                            {/* Best Sellers Item */}
                                            <div className="bestsellers_item">
                                                <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                    <div className="bestsellers_image"><img src="images/best_4.png" alt="" /></div>
                                                    <div className="bestsellers_content">
                                                        <div className="bestsellers_category"><a href="##">Headphones</a></div>
                                                        <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                        <div className="rating_r rating_r_4 bestsellers_rating"><i /><i /><i /><i /><i /></div>
                                                        <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                    </div>
                                                </div>
                                                <div className="bestsellers_fav"><i className="fas fa-heart" /></div>
                                                <ul className="bestsellers_marks">
                                                    <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                    <li className="bestsellers_mark bestsellers_new">new</li>
                                                </ul>
                                            </div>
                                            {/* Best Sellers Item */}
                                            <div className="bestsellers_item discount">
                                                <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                    <div className="bestsellers_image"><img src="images/best_5.png" alt="" /></div>
                                                    <div className="bestsellers_content">
                                                        <div className="bestsellers_category"><a href="##">Headphones</a></div>
                                                        <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                        <div className="rating_r rating_r_4 bestsellers_rating"><i /><i /><i /><i /><i /></div>
                                                        <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                    </div>
                                                </div>
                                                <div className="bestsellers_fav active"><i className="fas fa-heart" /></div>
                                                <ul className="bestsellers_marks">
                                                    <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                    <li className="bestsellers_mark bestsellers_new">new</li>
                                                </ul>
                                            </div>
                                            {/* Best Sellers Item */}
                                            <div className="bestsellers_item">
                                                <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                    <div className="bestsellers_image"><img src="images/best_6.png" alt="" /></div>
                                                    <div className="bestsellers_content">
                                                        <div className="bestsellers_category"><a href="##">Headphones</a></div>
                                                        <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                        <div className="rating_r rating_r_4 bestsellers_rating"><i /><i /><i /><i /><i /></div>
                                                        <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                    </div>
                                                </div>
                                                <div className="bestsellers_fav active"><i className="fas fa-heart" /></div>
                                                <ul className="bestsellers_marks">
                                                    <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                    <li className="bestsellers_mark bestsellers_new">new</li>
                                                </ul>
                                            </div>
                                            {/* Best Sellers Item */}
                                            <div className="bestsellers_item discount">
                                                <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                    <div className="bestsellers_image"><img src="images/best_1.png" alt="" /></div>
                                                    <div className="bestsellers_content">
                                                        <div className="bestsellers_category"><a href="##">Headphones</a></div>
                                                        <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                        <div className="rating_r rating_r_4 bestsellers_rating"><i /><i /><i /><i /><i /></div>
                                                        <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                    </div>
                                                </div>
                                                <div className="bestsellers_fav active"><i className="fas fa-heart" /></div>
                                                <ul className="bestsellers_marks">
                                                    <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                    <li className="bestsellers_mark bestsellers_new">new</li>
                                                </ul>
                                            </div>
                                            {/* Best Sellers Item */}
                                            <div className="bestsellers_item discount">
                                                <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                    <div className="bestsellers_image"><img src="images/best_2.png" alt="" /></div>
                                                    <div className="bestsellers_content">
                                                        <div className="bestsellers_category"><a href="##">Headphones</a></div>
                                                        <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                        <div className="rating_r rating_r_4 bestsellers_rating"><i /><i /><i /><i /><i /></div>
                                                        <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                    </div>
                                                </div>
                                                <div className="bestsellers_fav"><i className="fas fa-heart" /></div>
                                                <ul className="bestsellers_marks">
                                                    <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                    <li className="bestsellers_mark bestsellers_new">new</li>
                                                </ul>
                                            </div>
                                            {/* Best Sellers Item */}
                                            <div className="bestsellers_item">
                                                <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                    <div className="bestsellers_image"><img src="images/best_3.png" alt="" /></div>
                                                    <div className="bestsellers_content">
                                                        <div className="bestsellers_category"><a href="##">Headphones</a></div>
                                                        <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                        <div className="rating_r rating_r_4 bestsellers_rating"><i /><i /><i /><i /><i /></div>
                                                        <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                    </div>
                                                </div>
                                                <div className="bestsellers_fav"><i className="fas fa-heart" /></div>
                                                <ul className="bestsellers_marks">
                                                    <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                    <li className="bestsellers_mark bestsellers_new">new</li>
                                                </ul>
                                            </div>
                                            {/* Best Sellers Item */}
                                            <div className="bestsellers_item">
                                                <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                    <div className="bestsellers_image"><img src="images/best_4.png" alt="" /></div>
                                                    <div className="bestsellers_content">
                                                        <div className="bestsellers_category"><a href="##">Headphones</a></div>
                                                        <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                        <div className="rating_r rating_r_4 bestsellers_rating"><i /><i /><i /><i /><i /></div>
                                                        <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                    </div>
                                                </div>
                                                <div className="bestsellers_fav"><i className="fas fa-heart" /></div>
                                                <ul className="bestsellers_marks">
                                                    <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                    <li className="bestsellers_mark bestsellers_new">new</li>
                                                </ul>
                                            </div>
                                            {/* Best Sellers Item */}
                                            <div className="bestsellers_item discount">
                                                <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                    <div className="bestsellers_image"><img src="images/best_5.png" alt="" /></div>
                                                    <div className="bestsellers_content">
                                                        <div className="bestsellers_category"><a href="##">Headphones</a></div>
                                                        <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                        <div className="rating_r rating_r_4 bestsellers_rating"><i /><i /><i /><i /><i /></div>
                                                        <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                    </div>
                                                </div>
                                                <div className="bestsellers_fav active"><i className="fas fa-heart" /></div>
                                                <ul className="bestsellers_marks">
                                                    <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                    <li className="bestsellers_mark bestsellers_new">new</li>
                                                </ul>
                                            </div>
                                            {/* Best Sellers Item */}
                                            <div className="bestsellers_item">
                                                <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                    <div className="bestsellers_image"><img src="images/best_6.png" alt="" /></div>
                                                    <div className="bestsellers_content">
                                                        <div className="bestsellers_category"><a href="##">Headphones</a></div>
                                                        <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                        <div className="rating_r rating_r_4 bestsellers_rating"><i /><i /><i /><i /><i /></div>
                                                        <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                    </div>
                                                </div>
                                                <div className="bestsellers_fav active"><i className="fas fa-heart" /></div>
                                                <ul className="bestsellers_marks">
                                                    <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                    <li className="bestsellers_mark bestsellers_new">new</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bestsellers_panel panel">
                                        {/* Best Sellers Slider */}
                                        <div className="bestsellers_slider slider">
                                            {/* Best Sellers Item */}
                                            <div className="bestsellers_item discount">
                                                <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                    <div className="bestsellers_image"><img src="images/best_1.png" alt="" /></div>
                                                    <div className="bestsellers_content">
                                                        <div className="bestsellers_category"><a href="##">Headphones</a></div>
                                                        <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                        <div className="rating_r rating_r_4 bestsellers_rating"><i /><i /><i /><i /><i /></div>
                                                        <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                    </div>
                                                </div>
                                                <div className="bestsellers_fav active"><i className="fas fa-heart" /></div>
                                                <ul className="bestsellers_marks">
                                                    <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                    <li className="bestsellers_mark bestsellers_new">new</li>
                                                </ul>
                                            </div>
                                            {/* Best Sellers Item */}
                                            <div className="bestsellers_item discount">
                                                <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                    <div className="bestsellers_image"><img src="images/best_2.png" alt="" /></div>
                                                    <div className="bestsellers_content">
                                                        <div className="bestsellers_category"><a href="##">Headphones</a></div>
                                                        <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                        <div className="rating_r rating_r_4 bestsellers_rating"><i /><i /><i /><i /><i /></div>
                                                        <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                    </div>
                                                </div>
                                                <div className="bestsellers_fav"><i className="fas fa-heart" /></div>
                                                <ul className="bestsellers_marks">
                                                    <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                    <li className="bestsellers_mark bestsellers_new">new</li>
                                                </ul>
                                            </div>
                                            {/* Best Sellers Item */}
                                            <div className="bestsellers_item">
                                                <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                    <div className="bestsellers_image"><img src="images/best_3.png" alt="" /></div>
                                                    <div className="bestsellers_content">
                                                        <div className="bestsellers_category"><a href="##">Headphones</a></div>
                                                        <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                        <div className="rating_r rating_r_4 bestsellers_rating"><i /><i /><i /><i /><i /></div>
                                                        <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                    </div>
                                                </div>
                                                <div className="bestsellers_fav"><i className="fas fa-heart" /></div>
                                                <ul className="bestsellers_marks">
                                                    <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                    <li className="bestsellers_mark bestsellers_new">new</li>
                                                </ul>
                                            </div>
                                            {/* Best Sellers Item */}
                                            <div className="bestsellers_item">
                                                <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                    <div className="bestsellers_image"><img src="images/best_4.png" alt="" /></div>
                                                    <div className="bestsellers_content">
                                                        <div className="bestsellers_category"><a href="##">Headphones</a></div>
                                                        <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                        <div className="rating_r rating_r_4 bestsellers_rating"><i /><i /><i /><i /><i /></div>
                                                        <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                    </div>
                                                </div>
                                                <div className="bestsellers_fav"><i className="fas fa-heart" /></div>
                                                <ul className="bestsellers_marks">
                                                    <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                    <li className="bestsellers_mark bestsellers_new">new</li>
                                                </ul>
                                            </div>
                                            {/* Best Sellers Item */}
                                            <div className="bestsellers_item discount">
                                                <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                    <div className="bestsellers_image"><img src="images/best_5.png" alt="" /></div>
                                                    <div className="bestsellers_content">
                                                        <div className="bestsellers_category"><a href="##">Headphones</a></div>
                                                        <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                        <div className="rating_r rating_r_4 bestsellers_rating"><i /><i /><i /><i /><i /></div>
                                                        <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                    </div>
                                                </div>
                                                <div className="bestsellers_fav active"><i className="fas fa-heart" /></div>
                                                <ul className="bestsellers_marks">
                                                    <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                    <li className="bestsellers_mark bestsellers_new">new</li>
                                                </ul>
                                            </div>
                                            {/* Best Sellers Item */}
                                            <div className="bestsellers_item">
                                                <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                    <div className="bestsellers_image"><img src="images/best_6.png" alt="" /></div>
                                                    <div className="bestsellers_content">
                                                        <div className="bestsellers_category"><a href="##">Headphones</a></div>
                                                        <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                        <div className="rating_r rating_r_4 bestsellers_rating"><i /><i /><i /><i /><i /></div>
                                                        <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                    </div>
                                                </div>
                                                <div className="bestsellers_fav active"><i className="fas fa-heart" /></div>
                                                <ul className="bestsellers_marks">
                                                    <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                    <li className="bestsellers_mark bestsellers_new">new</li>
                                                </ul>
                                            </div>
                                            {/* Best Sellers Item */}
                                            <div className="bestsellers_item discount">
                                                <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                    <div className="bestsellers_image"><img src="images/best_1.png" alt="" /></div>
                                                    <div className="bestsellers_content">
                                                        <div className="bestsellers_category"><a href="##">Headphones</a></div>
                                                        <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                        <div className="rating_r rating_r_4 bestsellers_rating"><i /><i /><i /><i /><i /></div>
                                                        <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                    </div>
                                                </div>
                                                <div className="bestsellers_fav active"><i className="fas fa-heart" /></div>
                                                <ul className="bestsellers_marks">
                                                    <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                    <li className="bestsellers_mark bestsellers_new">new</li>
                                                </ul>
                                            </div>
                                            {/* Best Sellers Item */}
                                            <div className="bestsellers_item discount">
                                                <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                    <div className="bestsellers_image"><img src="images/best_2.png" alt="" /></div>
                                                    <div className="bestsellers_content">
                                                        <div className="bestsellers_category"><a href="##">Headphones</a></div>
                                                        <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                        <div className="rating_r rating_r_4 bestsellers_rating"><i /><i /><i /><i /><i /></div>
                                                        <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                    </div>
                                                </div>
                                                <div className="bestsellers_fav"><i className="fas fa-heart" /></div>
                                                <ul className="bestsellers_marks">
                                                    <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                    <li className="bestsellers_mark bestsellers_new">new</li>
                                                </ul>
                                            </div>
                                            {/* Best Sellers Item */}
                                            <div className="bestsellers_item">
                                                <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                    <div className="bestsellers_image"><img src="images/best_3.png" alt="" /></div>
                                                    <div className="bestsellers_content">
                                                        <div className="bestsellers_category"><a href="##">Headphones</a></div>
                                                        <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                        <div className="rating_r rating_r_4 bestsellers_rating"><i /><i /><i /><i /><i /></div>
                                                        <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                    </div>
                                                </div>
                                                <div className="bestsellers_fav"><i className="fas fa-heart" /></div>
                                                <ul className="bestsellers_marks">
                                                    <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                    <li className="bestsellers_mark bestsellers_new">new</li>
                                                </ul>
                                            </div>
                                            {/* Best Sellers Item */}
                                            <div className="bestsellers_item">
                                                <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                    <div className="bestsellers_image"><img src="images/best_4.png" alt="" /></div>
                                                    <div className="bestsellers_content">
                                                        <div className="bestsellers_category"><a href="##">Headphones</a></div>
                                                        <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                        <div className="rating_r rating_r_4 bestsellers_rating"><i /><i /><i /><i /><i /></div>
                                                        <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                    </div>
                                                </div>
                                                <div className="bestsellers_fav"><i className="fas fa-heart" /></div>
                                                <ul className="bestsellers_marks">
                                                    <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                    <li className="bestsellers_mark bestsellers_new">new</li>
                                                </ul>
                                            </div>
                                            {/* Best Sellers Item */}
                                            <div className="bestsellers_item discount">
                                                <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                    <div className="bestsellers_image"><img src="images/best_5.png" alt="" /></div>
                                                    <div className="bestsellers_content">
                                                        <div className="bestsellers_category"><a href="##">Headphones</a></div>
                                                        <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                        <div className="rating_r rating_r_4 bestsellers_rating"><i /><i /><i /><i /><i /></div>
                                                        <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                    </div>
                                                </div>
                                                <div className="bestsellers_fav active"><i className="fas fa-heart" /></div>
                                                <ul className="bestsellers_marks">
                                                    <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                    <li className="bestsellers_mark bestsellers_new">new</li>
                                                </ul>
                                            </div>
                                            {/* Best Sellers Item */}
                                            <div className="bestsellers_item">
                                                <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                    <div className="bestsellers_image"><img src="images/best_6.png" alt="" /></div>
                                                    <div className="bestsellers_content">
                                                        <div className="bestsellers_category"><a href="##">Headphones</a></div>
                                                        <div className="bestsellers_name"><a href="product.html">Xiaomi Redmi Note 4</a></div>
                                                        <div className="rating_r rating_r_4 bestsellers_rating"><i /><i /><i /><i /><i /></div>
                                                        <div className="bestsellers_price discount">$225<span>$300</span></div>
                                                    </div>
                                                </div>
                                                <div className="bestsellers_fav active"><i className="fas fa-heart" /></div>
                                                <ul className="bestsellers_marks">
                                                    <li className="bestsellers_mark bestsellers_discount">-25%</li>
                                                    <li className="bestsellers_mark bestsellers_new">new</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Adverts */}
                <div className="adverts">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 advert_col">
                                {/* Advert Item */}
                                <div className="advert d-flex flex-row align-items-center justify-content-start">
                                    <div className="advert_content">
                                        <div className="advert_title"><a href="##">Trends 2018</a></div>
                                        <div className="advert_text">Lorem ipsum dolor sit amet, consectetur adipiscing Donec et.</div>
                                    </div>
                                    <div className="ml-auto">
                                        <div className="advert_image"><img src="images/adv_1.png" alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 advert_col">
                                {/* Advert Item */}
                                <div className="advert d-flex flex-row align-items-center justify-content-start">
                                    <div className="advert_content">
                                        <div className="advert_subtitle">Trends 2018</div>
                                        <div className="advert_title_2"><a href="##">Sale -45%</a></div>
                                        <div className="advert_text">Lorem ipsum dolor sit amet, consectetur.</div>
                                    </div>
                                    <div className="ml-auto">
                                        <div className="advert_image"><img src="images/adv_2.png" alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 advert_col">
                                {/* Advert Item */}
                                <div className="advert d-flex flex-row align-items-center justify-content-start">
                                    <div className="advert_content">
                                        <div className="advert_title"><a href="##">Trends 2018</a></div>
                                        <div className="advert_text">Lorem ipsum dolor sit amet, consectetur.</div>
                                    </div>
                                    <div className="ml-auto">
                                        <div className="advert_image"><img src="images/adv_3.png" alt="" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Trends */}
                <div className="trends">
                    <div className="trends_background" style={{ backgroundImage: 'url(images/trends_background.jpg)' }} />
                    <div className="trends_overlay" />
                    <div className="container">
                        <div className="row">
                            {/* Trends Content */}
                            <div className="col-lg-3">
                                <div className="trends_container">
                                    <h2 className="trends_title">Trends 2018</h2>
                                    <div className="trends_text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing Donec et.</p>
                                    </div>
                                    <div className="trends_slider_nav">
                                        <div className="trends_prev trends_nav"><i className="fas fa-angle-left ml-auto" /></div>
                                        <div className="trends_next trends_nav"><i className="fas fa-angle-right ml-auto" /></div>
                                    </div>
                                </div>
                            </div>
                            {/* Trends Slider */}
                            <div className="col-lg-9">
                                <div className="trends_slider_container">
                                    {/* Trends Slider */}
                                    <div className="owl-carousel owl-theme trends_slider">
                                        {/* Trends Slider Item */}
                                        <div className="owl-item">
                                            <div className="trends_item is_new">
                                                <div className="trends_image d-flex flex-column align-items-center justify-content-center"><img src="images/trends_1.jpg" alt="" /></div>
                                                <div className="trends_content">
                                                    <div className="trends_category"><a href="##">Smartphones</a></div>
                                                    <div className="trends_info clearfix">
                                                        <div className="trends_name"><a href="product.html">Jump White</a></div>
                                                        <div className="trends_price">$379</div>
                                                    </div>
                                                </div>
                                                <ul className="trends_marks">
                                                    <li className="trends_mark trends_discount">-25%</li>
                                                    <li className="trends_mark trends_new">new</li>
                                                </ul>
                                                <div className="trends_fav"><i className="fas fa-heart" /></div>
                                            </div>
                                        </div>
                                        {/* Trends Slider Item */}
                                        <div className="owl-item">
                                            <div className="trends_item">
                                                <div className="trends_image d-flex flex-column align-items-center justify-content-center"><img src="images/trends_2.jpg" alt="" /></div>
                                                <div className="trends_content">
                                                    <div className="trends_category"><a href="##">Smartphones</a></div>
                                                    <div className="trends_info clearfix">
                                                        <div className="trends_name"><a href="product.html">Samsung Charm...</a></div>
                                                        <div className="trends_price">$379</div>
                                                    </div>
                                                </div>
                                                <ul className="trends_marks">
                                                    <li className="trends_mark trends_discount">-25%</li>
                                                    <li className="trends_mark trends_new">new</li>
                                                </ul>
                                                <div className="trends_fav"><i className="fas fa-heart" /></div>
                                            </div>
                                        </div>
                                        {/* Trends Slider Item */}
                                        <div className="owl-item">
                                            <div className="trends_item is_new">
                                                <div className="trends_image d-flex flex-column align-items-center justify-content-center"><img src="images/trends_3.jpg" alt="" /></div>
                                                <div className="trends_content">
                                                    <div className="trends_category"><a href="##">Smartphones</a></div>
                                                    <div className="trends_info clearfix">
                                                        <div className="trends_name"><a href="product.html">DJI Phantom 3...</a></div>
                                                        <div className="trends_price">$379</div>
                                                    </div>
                                                </div>
                                                <ul className="trends_marks">
                                                    <li className="trends_mark trends_discount">-25%</li>
                                                    <li className="trends_mark trends_new">new</li>
                                                </ul>
                                                <div className="trends_fav"><i className="fas fa-heart" /></div>
                                            </div>
                                        </div>
                                        {/* Trends Slider Item */}
                                        <div className="owl-item">
                                            <div className="trends_item is_new">
                                                <div className="trends_image d-flex flex-column align-items-center justify-content-center"><img src="images/trends_1.jpg" alt="" /></div>
                                                <div className="trends_content">
                                                    <div className="trends_category"><a href="##">Smartphones</a></div>
                                                    <div className="trends_info clearfix">
                                                        <div className="trends_name"><a href="product.html">Jump White</a></div>
                                                        <div className="trends_price">$379</div>
                                                    </div>
                                                </div>
                                                <ul className="trends_marks">
                                                    <li className="trends_mark trends_discount">-25%</li>
                                                    <li className="trends_mark trends_new">new</li>
                                                </ul>
                                                <div className="trends_fav"><i className="fas fa-heart" /></div>
                                            </div>
                                        </div>
                                        {/* Trends Slider Item */}
                                        <div className="owl-item">
                                            <div className="trends_item">
                                                <div className="trends_image d-flex flex-column align-items-center justify-content-center"><img src="images/trends_2.jpg" alt="" /></div>
                                                <div className="trends_content">
                                                    <div className="trends_category"><a href="##">Smartphones</a></div>
                                                    <div className="trends_info clearfix">
                                                        <div className="trends_name"><a href="product.html">Jump White</a></div>
                                                        <div className="trends_price">$379</div>
                                                    </div>
                                                </div>
                                                <ul className="trends_marks">
                                                    <li className="trends_mark trends_discount">-25%</li>
                                                    <li className="trends_mark trends_new">new</li>
                                                </ul>
                                                <div className="trends_fav"><i className="fas fa-heart" /></div>
                                            </div>
                                        </div>
                                        {/* Trends Slider Item */}
                                        <div className="owl-item">
                                            <div className="trends_item is_new">
                                                <div className="trends_image d-flex flex-column align-items-center justify-content-center"><img src="images/trends_3.jpg" alt="" /></div>
                                                <div className="trends_content">
                                                    <div className="trends_category"><a href="##">Smartphones</a></div>
                                                    <div className="trends_info clearfix">
                                                        <div className="trends_name"><a href="product.html">Jump White</a></div>
                                                        <div className="trends_price">$379</div>
                                                    </div>
                                                </div>
                                                <ul className="trends_marks">
                                                    <li className="trends_mark trends_discount">-25%</li>
                                                    <li className="trends_mark trends_new">new</li>
                                                </ul>
                                                <div className="trends_fav"><i className="fas fa-heart" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Reviews */}
                <div className="reviews">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="reviews_title_container">
                                    <h3 className="reviews_title">Latest Reviews</h3>
                                    <div className="reviews_all ml-auto"><a href="##">view all <span>reviews</span></a></div>
                                </div>
                                <div className="reviews_slider_container">
                                    {/* Reviews Slider */}
                                    <div className="owl-carousel owl-theme reviews_slider">
                                        {/* Reviews Slider Item */}
                                        <div className="owl-item">
                                            <div className="review d-flex flex-row align-items-start justify-content-start">
                                                <div>
                                                    <div className="review_image"><img src="images/review_1.jpg" alt="" /></div>
                                                </div>
                                                <div className="review_content">
                                                    <div className="review_name">Roberto Sanchez</div>
                                                    <div className="review_rating_container">
                                                        <div className="rating_r rating_r_4 review_rating"><i /><i /><i /><i /><i /></div>
                                                        <div className="review_time">2 day ago</div>
                                                    </div>
                                                    <div className="review_text">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum laoreet.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Reviews Slider Item */}
                                        <div className="owl-item">
                                            <div className="review d-flex flex-row align-items-start justify-content-start">
                                                <div>
                                                    <div className="review_image"><img src="images/review_2.jpg" alt="" /></div>
                                                </div>
                                                <div className="review_content">
                                                    <div className="review_name">Brandon Flowers</div>
                                                    <div className="review_rating_container">
                                                        <div className="rating_r rating_r_4 review_rating"><i /><i /><i /><i /><i /></div>
                                                        <div className="review_time">2 day ago</div>
                                                    </div>
                                                    <div className="review_text">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum laoreet.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Reviews Slider Item */}
                                        <div className="owl-item">
                                            <div className="review d-flex flex-row align-items-start justify-content-start">
                                                <div>
                                                    <div className="review_image"><img src="images/review_3.jpg" alt="" /></div>
                                                </div>
                                                <div className="review_content">
                                                    <div className="review_name">Emilia Clarke</div>
                                                    <div className="review_rating_container">
                                                        <div className="rating_r rating_r_4 review_rating"><i /><i /><i /><i /><i /></div>
                                                        <div className="review_time">2 day ago</div>
                                                    </div>
                                                    <div className="review_text">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum laoreet.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Reviews Slider Item */}
                                        <div className="owl-item">
                                            <div className="review d-flex flex-row align-items-start justify-content-start">
                                                <div>
                                                    <div className="review_image"><img src="images/review_1.jpg" alt="" /></div>
                                                </div>
                                                <div className="review_content">
                                                    <div className="review_name">Roberto Sanchez</div>
                                                    <div className="review_rating_container">
                                                        <div className="rating_r rating_r_4 review_rating"><i /><i /><i /><i /><i /></div>
                                                        <div className="review_time">2 day ago</div>
                                                    </div>
                                                    <div className="review_text">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum laoreet.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Reviews Slider Item */}
                                        <div className="owl-item">
                                            <div className="review d-flex flex-row align-items-start justify-content-start">
                                                <div>
                                                    <div className="review_image"><img src="images/review_2.jpg" alt="" /></div>
                                                </div>
                                                <div className="review_content">
                                                    <div className="review_name">Brandon Flowers</div>
                                                    <div className="review_rating_container">
                                                        <div className="rating_r rating_r_4 review_rating"><i /><i /><i /><i /><i /></div>
                                                        <div className="review_time">2 day ago</div>
                                                    </div>
                                                    <div className="review_text">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum laoreet.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Reviews Slider Item */}
                                        <div className="owl-item">
                                            <div className="review d-flex flex-row align-items-start justify-content-start">
                                                <div>
                                                    <div className="review_image"><img src="images/review_3.jpg" alt="" /></div>
                                                </div>
                                                <div className="review_content">
                                                    <div className="review_name">Emilia Clarke</div>
                                                    <div className="review_rating_container">
                                                        <div className="rating_r rating_r_4 review_rating"><i /><i /><i /><i /><i /></div>
                                                        <div className="review_time">2 day ago</div>
                                                    </div>
                                                    <div className="review_text">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum laoreet.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="reviews_dots" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Recently Viewed */}
                <div className="viewed">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="viewed_title_container">
                                    <h3 className="viewed_title">Recently Viewed</h3>
                                    <div className="viewed_nav_container">
                                        <div className="viewed_nav viewed_prev"><i className="fas fa-chevron-left" /></div>
                                        <div className="viewed_nav viewed_next"><i className="fas fa-chevron-right" /></div>
                                    </div>
                                </div>
                                <div className="viewed_slider_container">
                                    {/* Recently Viewed Slider */}
                                    <div className="owl-carousel owl-theme viewed_slider">
                                        {/* Recently Viewed Item */}
                                        <div className="owl-item">
                                            <div className="viewed_item discount d-flex flex-column align-items-center justify-content-center text-center">
                                                <div className="viewed_image"><img src="images/view_1.jpg" alt="" /></div>
                                                <div className="viewed_content text-center">
                                                    <div className="viewed_price">$225<span>$300</span></div>
                                                    <div className="viewed_name"><a href="##">Beoplay H7</a></div>
                                                </div>
                                                <ul className="item_marks">
                                                    <li className="item_mark item_discount">-25%</li>
                                                    <li className="item_mark item_new">new</li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* Recently Viewed Item */}
                                        <div className="owl-item">
                                            <div className="viewed_item d-flex flex-column align-items-center justify-content-center text-center">
                                                <div className="viewed_image"><img src="images/view_2.jpg" alt="" /></div>
                                                <div className="viewed_content text-center">
                                                    <div className="viewed_price">$379</div>
                                                    <div className="viewed_name"><a href="##">LUNA Smartphone</a></div>
                                                </div>
                                                <ul className="item_marks">
                                                    <li className="item_mark item_discount">-25%</li>
                                                    <li className="item_mark item_new">new</li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* Recently Viewed Item */}
                                        <div className="owl-item">
                                            <div className="viewed_item d-flex flex-column align-items-center justify-content-center text-center">
                                                <div className="viewed_image"><img src="images/view_3.jpg" alt="" /></div>
                                                <div className="viewed_content text-center">
                                                    <div className="viewed_price">$225</div>
                                                    <div className="viewed_name"><a href="##">Samsung J730F...</a></div>
                                                </div>
                                                <ul className="item_marks">
                                                    <li className="item_mark item_discount">-25%</li>
                                                    <li className="item_mark item_new">new</li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* Recently Viewed Item */}
                                        <div className="owl-item">
                                            <div className="viewed_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                <div className="viewed_image"><img src="images/view_4.jpg" alt="" /></div>
                                                <div className="viewed_content text-center">
                                                    <div className="viewed_price">$379</div>
                                                    <div className="viewed_name"><a href="##">Huawei MediaPad...</a></div>
                                                </div>
                                                <ul className="item_marks">
                                                    <li className="item_mark item_discount">-25%</li>
                                                    <li className="item_mark item_new">new</li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* Recently Viewed Item */}
                                        <div className="owl-item">
                                            <div className="viewed_item discount d-flex flex-column align-items-center justify-content-center text-center">
                                                <div className="viewed_image"><img src="images/view_5.jpg" alt="" /></div>
                                                <div className="viewed_content text-center">
                                                    <div className="viewed_price">$225<span>$300</span></div>
                                                    <div className="viewed_name"><a href="##">Sony PS4 Slim</a></div>
                                                </div>
                                                <ul className="item_marks">
                                                    <li className="item_mark item_discount">-25%</li>
                                                    <li className="item_mark item_new">new</li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* Recently Viewed Item */}
                                        <div className="owl-item">
                                            <div className="viewed_item d-flex flex-column align-items-center justify-content-center text-center">
                                                <div className="viewed_image"><img src="images/view_6.jpg" alt="" /></div>
                                                <div className="viewed_content text-center">
                                                    <div className="viewed_price">$375</div>
                                                    <div className="viewed_name"><a href="##">Speedlink...</a></div>
                                                </div>
                                                <ul className="item_marks">
                                                    <li className="item_mark item_discount">-25%</li>
                                                    <li className="item_mark item_new">new</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Brands */}
                <div className="brands">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="brands_slider_container">
                                    {/* Brands Slider */}
                                    <div className="owl-carousel owl-theme brands_slider">
                                        <div className="owl-item">
                                            <div className="brands_item d-flex flex-column justify-content-center"><img src="images/brands_1.jpg" alt="" /></div>
                                        </div>
                                        <div className="owl-item">
                                            <div className="brands_item d-flex flex-column justify-content-center"><img src="images/brands_2.jpg" alt="" /></div>
                                        </div>
                                        <div className="owl-item">
                                            <div className="brands_item d-flex flex-column justify-content-center"><img src="images/brands_3.jpg" alt="" /></div>
                                        </div>
                                        <div className="owl-item">
                                            <div className="brands_item d-flex flex-column justify-content-center"><img src="images/brands_4.jpg" alt="" /></div>
                                        </div>
                                        <div className="owl-item">
                                            <div className="brands_item d-flex flex-column justify-content-center"><img src="images/brands_5.jpg" alt="" /></div>
                                        </div>
                                        <div className="owl-item">
                                            <div className="brands_item d-flex flex-column justify-content-center"><img src="images/brands_6.jpg" alt="" /></div>
                                        </div>
                                        <div className="owl-item">
                                            <div className="brands_item d-flex flex-column justify-content-center"><img src="images/brands_7.jpg" alt="" /></div>
                                        </div>
                                        <div className="owl-item">
                                            <div className="brands_item d-flex flex-column justify-content-center"><img src="images/brands_8.jpg" alt="" /></div>
                                        </div>
                                    </div>
                                    {/* Brands Slider Navigation */}
                                    <div className="brands_nav brands_prev"><i className="fas fa-chevron-left" /></div>
                                    <div className="brands_nav brands_next"><i className="fas fa-chevron-right" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Newsletter */}
                <div className="newsletter">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="newsletter_container d-flex flex-lg-row flex-column align-items-lg-center align-items-center justify-content-lg-start justify-content-center">
                                    <div className="newsletter_title_container">
                                        <div className="newsletter_icon"><img src="images/send.png" alt="" /></div>
                                        <div className="newsletter_title">Sign up for Newsletter</div>
                                        <div className="newsletter_text">
                                            <p>...and receive %20 coupon for first shopping.</p>
                                        </div>
                                    </div>
                                    <div className="newsletter_content clearfix">
                                        <form action="#" className="newsletter_form">
                                            <input type="email" className="newsletter_input" required="required" placeholder="Enter your email address" />
                                            <button className="newsletter_button">Subscribe</button>
                                        </form>
                                        <div className="newsletter_unsubscribe_link"><a href="##">unsubscribe</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer */}
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 footer_col">
                                <div className="footer_column footer_contact">
                                    <div className="logo_container">
                                        <div className="logo"><a href="##">OneTech</a></div>
                                    </div>
                                    <div className="footer_title">Got Question? Call Us 24/7</div>
                                    <div className="footer_phone">+38 068 005 3570</div>
                                    <div className="footer_contact_text">
                                        <p>17 Princess Road, London</p>
                                        <p>Grester London NW18JR, UK</p>
                                    </div>
                                    <div className="footer_social">
                                        <ul>
                                            <li><a href="##"><i className="fab fa-facebook-f" /></a></li>
                                            <li><a href="##"><i className="fab fa-twitter" /></a></li>
                                            <li><a href="##"><i className="fab fa-youtube" /></a></li>
                                            <li><a href="##"><i className="fab fa-google" /></a></li>
                                            <li><a href="##"><i className="fab fa-vimeo-v" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 offset-lg-2">
                                <div className="footer_column">
                                    <div className="footer_title">Find it Fast</div>
                                    <ul className="footer_list">
                                        <li><a href="##">Computers &amp; Laptops</a></li>
                                        <li><a href="##">Cameras &amp; Photos</a></li>
                                        <li><a href="##">Hardware</a></li>
                                        <li><a href="##">Smartphones &amp; Tablets</a></li>
                                        <li><a href="##">TV &amp; Audio</a></li>
                                    </ul>
                                    <div className="footer_subtitle">Gadgets</div>
                                    <ul className="footer_list">
                                        <li><a href="##">Car Electronics</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="footer_column">
                                    <ul className="footer_list footer_list_2">
                                        <li><a href="##">Video Games &amp; Consoles</a></li>
                                        <li><a href="##">Accessories</a></li>
                                        <li><a href="##">Cameras &amp; Photos</a></li>
                                        <li><a href="##">Hardware</a></li>
                                        <li><a href="##">Computers &amp; Laptops</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="footer_column">
                                    <div className="footer_title">Customer Care</div>
                                    <ul className="footer_list">
                                        <li><a href="##">My Account</a></li>
                                        <li><a href="##">Order Tracking</a></li>
                                        <li><a href="##">Wish List</a></li>
                                        <li><a href="##">Customer Services</a></li>
                                        <li><a href="##">Returns / Exchange</a></li>
                                        <li><a href="##">FAQs</a></li>
                                        <li><a href="##">Product Support</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* Copyright */}
                <div className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="copyright_container d-flex flex-sm-row flex-column align-items-center justify-content-start">
                                    <div className="copyright_content">
                                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              Copyright ©
              All rights reserved | This template is made
              with <i className="fa fa-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
                                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                    </div>
                                    <div className="logos ml-sm-auto">
                                        <ul className="logos_list">
                                            <li><a href="##"><img src="images/logos_1.png" alt="" /></a></li>
                                            <li><a href="##"><img src="images/logos_2.png" alt="" /></a></li>
                                            <li><a href="##"><img src="images/logos_3.png" alt="" /></a></li>
                                            <li><a href="##"><img src="images/logos_4.png" alt="" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>        
        )
    }
}

export default TrangChu
