import logo from '../src/img/logo.png';
import banner from '../src/img/banner.png';
import branches from '../src/img/branches.png';
import logo360 from '../src/img/360.png';
import kids from '../src/img/kids.png';
import men from '../src/img/men.png';
import women from '../src/img/women.png';
import ad from '../src/img/ad.jpg';
import finalTouch from '../src/img/final.png';
import final2 from '../src/img/final2.png';
import p1 from '../src/img/p1.png';
import p2 from '../src/img/p2.png';
import nasnav from '../src/img/nasnav.png';
import j1 from '../src/img/j1.png';
import j2 from '../src/img/j2.png';
import j3 from '../src/img/j3.png';
import j4 from '../src/img/j4.png';
import j5 from '../src/img/j5.png';
import j6 from '../src/img/j6.png';
import ar from '../src/img/ar.png';
import en from '../src/img/en.png';
import v1 from '../src/img/v1.png';
import v2 from '../src/img/v2.png';

export default {
    theme: {
        'primary': '#000000',
        'primary-light': '#333333',
        'secondary': '#ffffff',
        'secondary-light': '#bebebe',
    },
    header: {
        tobBar: {
            singIn: '/signin',
            ar,
            en,
            links: [{
                label: 'feedback',
                route: '/feedback'
            }, {
                label: 'Track order',
                route: 'order'
            }, {
                label: 'find a store',
                route: '/store'
            }, {
                label: 'help',
                route: '/help'
            }]
        },
        navigation: {
            logo: logo,
            menus: [
                {
                    title: 'men',
                    route: '/products',
                    items: [
                        {
                            title: 'clothing',
                            links: [
                                {
                                    label: 'new arrival',
                                    route: '/products'
                                }, {
                                    label: 'jens',
                                    route: '/products'
                                },
                                {
                                    label: 'Tees&polo',
                                    route: '/products'
                                },
                                {
                                    label: 'new arrival',
                                    route: '/products'
                                }, {
                                    label: 'jens',
                                    route: '/products'
                                },
                                {
                                    label: 'Tees&polo',
                                    route: '/products'
                                }, {
                                    label: 'new arrival',
                                    route: '/products'
                                }, {
                                    label: 'jens',
                                    route: '/products'
                                },
                                {
                                    label: 'Tees&polo',
                                    route: '/products'
                                }
                            ]
                        }, {
                            title: 'jens by fit',
                            links: [
                                {
                                    label: 'new arrival',
                                    route: '/products'
                                }, {
                                    label: 'jens',
                                    route: '/products'
                                },
                                {
                                    label: 'Tees&polo',
                                    route: '/products'
                                }
                            ]
                        }, {
                            title: 'clothing',
                            links: [
                                {
                                    label: 'new arrival',
                                    route: '/products'
                                }, {
                                    label: 'jens',
                                    route: '/products'
                                },
                                {
                                    label: 'Tees&polo',
                                    route: '/products'
                                }
                            ]
                        }
                    ]
                },
                {
                    title: 'women',
                    route: '/women',
                    items: [
                        {
                            title: 'clothing',
                            links: [
                                {
                                    label: 'new arrival',
                                    route: '/products'
                                }, {
                                    label: 'jens',
                                    route: '/products'
                                },
                                {
                                    label: 'Tees&polo',
                                    route: '/products'
                                }
                            ]
                        }, {
                            title: 'jens by fit',
                            links: [
                                {
                                    label: 'new arrival',
                                    route: '/products'
                                }, {
                                    label: 'jens',
                                    route: '/products'
                                },
                                {
                                    label: 'Tees&polo',
                                    route: '/products'
                                }
                            ]
                        }, {
                            title: 'clothing',
                            links: [
                                {
                                    label: 'new arrival',
                                    route: '/products'
                                }, {
                                    label: 'jens',
                                    route: '/products'
                                },
                                {
                                    label: 'Tees&polo',
                                    route: '/products'
                                }
                            ]
                        }
                    ]
                },
                {
                    title: 'kids',
                    route: '/kids',
                    items: [
                        {
                            title: 's',
                            links: [
                                {
                                    label: 'new arrival',
                                    route: '/products'
                                }
                            ]
                        }
                    ]
                }, {
                    title: 'accessories',
                    route: '/accessories',
                    items: [
                        {
                            title: 'clothing',
                            links: [
                                {
                                    label: 'new arrival',
                                    route: '/products'
                                }, {
                                    label: 'jens',
                                    route: '/products'
                                },
                                {
                                    label: 'Tees&polo',
                                    route: '/products'
                                },
                                {
                                    label: 'new arrival',
                                    route: '/products'
                                }, {
                                    label: 'jens',
                                    route: '/products'
                                },
                                {
                                    label: 'Tees&polo',
                                    route: '/products'
                                }, {
                                    label: 'new arrival',
                                    route: '/products'
                                }, {
                                    label: 'jens',
                                    route: '/products'
                                },
                                {
                                    label: 'Tees&polo',
                                    route: '/products'
                                }
                            ]
                        }, {
                            title: 'jens by fit',
                            links: [
                                {
                                    label: 'new arrival',
                                    route: '/products'
                                }, {
                                    label: 'jens',
                                    route: '/products'
                                },
                                {
                                    label: 'Tees&polo',
                                    route: '/products'
                                }
                            ]
                        }, {
                            title: 'clothing',
                            links: [
                                {
                                    label: 'new arrival',
                                    route: '/products'
                                }, {
                                    label: 'jens',
                                    route: '/products'
                                },
                                {
                                    label: 'Tees&polo',
                                    route: '/products'
                                }
                            ]
                        }
                    ]
                }, {
                    title: '360',
                    route: '360',
                    items: [
                        {
                            title: 'clothing',
                            links: [
                                {
                                    label: 'new arrival',
                                    route: '/products'
                                }, {
                                    label: 'jens',
                                    route: '/products'
                                },
                                {
                                    label: 'Tees&polo',
                                    route: '/products'
                                },
                                {
                                    label: 'new arrival',
                                    route: '/products'
                                }, {
                                    label: 'jens',
                                    route: '/products'
                                },
                                {
                                    label: 'Tees&polo',
                                    route: '/products'
                                }, {
                                    label: 'new arrival',
                                    route: '/products'
                                }, {
                                    label: 'jens',
                                    route: '/products'
                                },
                                {
                                    label: 'Tees&polo',
                                    route: '/products'
                                }
                            ]
                        }, {
                            title: 'jens by fit',
                            links: [
                                {
                                    label: 'new arrival',
                                    route: '/products'
                                }, {
                                    label: 'jens',
                                    route: '/products'
                                },
                                {
                                    label: 'Tees&polo',
                                    route: '/products'
                                }
                            ]
                        }, {
                            title: 'clothing',
                            links: [
                                {
                                    label: 'new arrival',
                                    route: '/products'
                                }, {
                                    label: 'jens',
                                    route: '/products'
                                },
                                {
                                    label: 'Tees&polo',
                                    route: '/products'
                                }
                            ]
                        }
                    ]
                }, {
                    title: 'new arrivals',
                    route: 'route',
                    color: 'blue',
                    items: [
                        {
                            title: 'clothing',
                            links: [
                                {
                                    label: 'new arrival',
                                    route: '/products'
                                }, {
                                    label: 'jens',
                                    route: '/products'
                                },
                                {
                                    label: 'Tees&polo',
                                    route: '/products'
                                },
                                {
                                    label: 'new arrival',
                                    route: '/products'
                                }, {
                                    label: 'jens',
                                    route: '/products'
                                },
                                {
                                    label: 'Tees&polo',
                                    route: '/products'
                                }, {
                                    label: 'new arrival',
                                    route: '/products'
                                }, {
                                    label: 'jens',
                                    route: '/products'
                                },
                                {
                                    label: 'Tees&polo',
                                    route: '/products'
                                }
                            ]
                        }, {
                            title: 'jens by fit',
                            links: [
                                {
                                    label: 'new arrival',
                                    route: '/products'
                                }, {
                                    label: 'jens',
                                    route: '/products'
                                },
                                {
                                    label: 'Tees&polo',
                                    route: '/products'
                                }
                            ]
                        }, {
                            title: 'clothing',
                            links: [
                                {
                                    label: 'new arrival',
                                    route: '/products'
                                }, {
                                    label: 'jens',
                                    route: '/products'
                                },
                                {
                                    label: 'Tees&polo',
                                    route: '/products'
                                }
                            ]
                        }
                    ]
                }, {
                    title: 'spacial offers',
                    route: '/specua',
                    color: 'red',
                    items: [
                        {
                            title: 'clothing',
                            links: [
                                {
                                    label: 'new arrival',
                                    route: '/products'
                                }, {
                                    label: 'jens',
                                    route: '/products'
                                },
                                {
                                    label: 'Tees&polo',
                                    route: '/products'
                                },
                                {
                                    label: 'new arrival',
                                    route: '/products'
                                }, {
                                    label: 'jens',
                                    route: '/products'
                                },
                                {
                                    label: 'Tees&polo',
                                    route: '/products'
                                }, {
                                    label: 'new arrival',
                                    route: '/products'
                                }, {
                                    label: 'jens',
                                    route: '/products'
                                },
                                {
                                    label: 'Tees&polo',
                                    route: '/products'
                                }
                            ]
                        }, {
                            title: 'jens by fit',
                            links: [
                                {
                                    label: 'new arrival',
                                    route: '/products'
                                }, {
                                    label: 'jens',
                                    route: '/products'
                                },
                                {
                                    label: 'Tees&polo',
                                    route: '/products'
                                }
                            ]
                        }, {
                            title: 'clothing',
                            links: [
                                {
                                    label: 'new arrival',
                                    route: '/products'
                                }, {
                                    label: 'jens',
                                    route: '/products'
                                },
                                {
                                    label: 'Tees&polo',
                                    route: '/products'
                                }
                            ]
                        }
                    ]
                }, {
                    title: 'ra sports',
                    route: '/specua',
                    items: [
                        {
                            title: 'clothing',
                            links: [
                                {
                                    label: 'new arrival',
                                    route: '/products'
                                }, {
                                    label: 'jens',
                                    route: '/products'
                                },
                                {
                                    label: 'Tees&polo',
                                    route: '/products'
                                },
                                {
                                    label: 'new arrival',
                                    route: '/products'
                                }, {
                                    label: 'jens',
                                    route: '/products'
                                },
                                {
                                    label: 'Tees&polo',
                                    route: '/products'
                                }, {
                                    label: 'new arrival',
                                    route: '/products'
                                }, {
                                    label: 'jens',
                                    route: '/products'
                                },
                                {
                                    label: 'Tees&polo',
                                    route: '/products'
                                }
                            ]
                        }, {
                            title: 'jens by fit',
                            links: [
                                {
                                    label: 'new arrival',
                                    route: '/products'
                                }, {
                                    label: 'jens',
                                    route: '/products'
                                },
                                {
                                    label: 'Tees&polo',
                                    route: '/products'
                                }
                            ]
                        }, {
                            title: 'clothing',
                            links: [
                                {
                                    label: 'new arrival',
                                    route: '/products'
                                }, {
                                    label: 'jens',
                                    route: '/products'
                                },
                                {
                                    label: 'Tees&polo',
                                    route: '/products'
                                }
                            ]
                        }
                    ]
                },
            ],
        },
    },
    footer: {
        navLinks: [{
            header: "Quick links",
            links: [{
                label: "return police",
                route: "/asdad"
            }, {
                label: "lorem ipsum",
                route: "/asdad"
            }, {
                label: "doloro sit amit",
                route: "/asdad"
            }, {
                label: "return police",
                route: "/asdad"
            }, {
                label: "doloro sit amit",
                route: "/asdad"
            }, {
                label: "return police",
                route: "/asdad"
            }]
        }, {
            header: "support",
            links: [{
                label: "return police",
                route: "/asdad"
            }, {
                label: "lorem ipsum",
                route: "/asdad"
            }, {
                label: "doloro sit amit",
                route: "/asdad"
            }, {
                label: "return police",
                route: "/asdad"
            }, {
                label: "doloro sit amit",
                route: "/asdad"
            }, {
                label: "return police",
                route: "/asdad"
            }]
        }, {
            header: "company",
            links: [{
                label: "return police",
                route: "/asdad"
            }, {
                label: "lorem ipsum",
                route: "/asdad"
            }, {
                label: "doloro sit amit",
                route: "/asdad"
            }, {
                label: "return police",
                route: "/asdad"
            }, {
                label: "doloro sit amit",
                route: "/asdad"
            }, {
                label: "return police",
                route: "/asdad"
            }]
        }],
        socialLinks: [{
            type: "facebook",
            link: ""
        }, {
            type: "twitter",
            link: ""
        }, {
            type: "instagram",
            link: ""
        }, {
            type: "google",
            link: ""
        }],
        subscripe: {
            header: "it's all about you",
            body: " lorem ipsum dolor sit amit doli faloi fdali houlid lorem ipsum dolor sit amit doli faloi fdali houlid"
        },
        logos: {
            company: logo,
            nasnav: nasnav
        }
    },
    home: {
        carouselLinks: [
            {
                header: "new store is opening now in cairo",
                label: "visit cairo Live's branch",
                route: "/branch"
            },
            {
                header: "new store is opening now in nasr city",
                label: "visit nasr city Live's branch",
                route: "/branch"
            },
            {
                header: "new store is opening now in maadi",
                label: "visit maadi Live's branch",
                route: "/branch"
            },
            {
                header: "new store is opening now in Alex",
                label: "visit Alex Live's branch",
                route: "/branch"
            }
        ]
        ,
        banner: {
            title: "get 50% off sale select styled",
            sub: 'end of season sale',
            background: banner
        },
        branches: {
            background: branches,
            logo: logo360,
            header: '360- Degree shopping experience',
            sub: 'Levi’s unique shopping  experience',
            branches: [
                {
                    label: 'Cairo festival city',
                    route: '/branch'
                },
                {
                    label: 'downtown mall',
                    route: '/branch'
                },
                {
                    label: 'Mall of egypt',
                    route: '/branch'
                }
            ],
            moreLink: { route: '/branches', label: 'find out more' }
        },
        categories: [{
            label: 'shop men',
            img: men,
            route: '/products'
        }, {
            label: 'shop women',
            img: women,
            route: '/products'
        }, {
            label: 'shop kids',
            img: kids,
            route: '/products'
        }],
        ad: {
            background: ad,
            header: '20th Anniversary Edition',
            main: "LEVI'S® ENGINEERED JEANS™",
            description: 'Inspired by our 1999 original Levi’s® Engineered Jeans™, this 2',
            link: {
                label: 'shop now',
                route: '/products'
            }
        },
        final: {
            title: "THE FINAL TOUCH ",
            sub: "Complete your look with new summer belts, bags and hats.",
            background: finalTouch,
            img: final2,
            links: [
                {
                    label: "Men’s Accessories",
                    route: "/products"
                },
                {
                    label: "woMen’s Accessories",
                    route: "/products"
                }
            ]
        },
        jeans: {
            background: ad,
            header: "Jeans For All",
            main: "Find your fit",
            links: [{
                label: 'Men’s jeans guide',
                route: "/products"
            }, {
                label: 'woMen’s jeans guide',
                route: "/products"
            }]
        },
        trending: {
            header: 'trending now!',
            products: [{
                img: p1,
                route: "/products"
            }, {
                img: p2,
                route: "/products"
            }, {
                img: p1,
                route: "/products"
            }, {
                img: p2,
                route: "/products"
            }, {
                img: p1,
                route: "/products"
            }, {
                img: p2,
                route: "/products"
            }, {
                img: p1,
                route: "/products"
            }, {
                img: p2,
                route: "/products"
            }, {
                img: p1,
                route: "/products"
            }, {
                img: p2,
                route: "/products"
            }, {
                img: p1,
                route: "/products"
            }, {
                img: p2,
                route: "/products"
            }, {
                img: p1,
                route: "/products"
            }, {
                img: p2,
                route: "/products"
            }]
        },
    },
    products: {
        header: "jeans",
        background: ad,
        searchTitle: 'refine',
        sort: ['price low to high', 'price high to low', 'size hight to low'],
        search: [
            {
                title: 'colour',
                color: true,
                inputGroup: [{
                    name: 'black',
                    num: 5
                }, {
                    name: 'blue',
                    num: 7
                }, {
                    name: 'lightblue',
                    num: 35
                }, {
                    name: 'grey',
                    num: 30
                }, {
                    name: 'silver',
                    num: 30
                }]
            }, {
                title: 'lot number',
                inputGroup: [{
                    name: '501',
                    num: 5
                }, {
                    name: '502',
                    num: 7
                }, {
                    name: '503',
                    num: 35
                }, {
                    name: '504',
                    num: 30
                }, {
                    name: '505',
                    num: 30
                }]
            }, {
                title: 'fit',
                inputGroup: [{
                    name: 'bootcut',
                    num: 5
                }, {
                    name: 'slim',
                    num: 7
                }, {
                    name: 'skinny',
                    num: 35
                }, {
                    name: 'straight',
                    num: 30
                }, {
                    name: 'tapper',
                    num: 30
                }]
            }
        ],
        results: {
            number: 1500,
            unit: 'style',
            data: [
                {
                    img: j1,
                    link: { route: '/product', label: 'quick view' },
                    dec: 'lorem ipsum dolor sit ameit skado salo smil doliggo',
                    price: 2500,
                    currency: 'egp',
                    offer: true
                }, {
                    img: j2,
                    link: { route: '/product', label: 'quick view' },
                    dec: 'lorem ipsum dolor sit ameit skado salo smil doliggo',
                    price: 2500,
                    currency: 'egp',
                }, {
                    img: j3,
                    link: { route: '/product', label: 'quick view' },
                    dec: 'lorem ipsum dolor sit ameit skado salo smil doliggo',
                    price: 2500,
                    currency: 'egp',
                    offer: true
                }, {
                    img: j4,
                    link: { route: '/product', label: 'quick view' },
                    dec: 'lorem ipsum dolor sit ameit skado salo smil doliggo',
                    price: 2500,
                    currency: 'egp',
                }, {
                    img: j5,
                    link: { route: '/product', label: 'quick view' },
                    dec: 'lorem ipsum dolor sit ameit skado salo smil doliggo',
                    price: 2500,
                    currency: 'egp',
                    offer: true
                }, {
                    img: j6,
                    link: { route: '/product', label: 'quick view' },
                    dec: 'lorem ipsum dolor sit ameit skado salo smil doliggo',
                    price: 2500,
                    currency: 'egp',
                }, {
                    img: j1,
                    link: { route: '/product', label: 'quick view' },
                    dec: 'lorem ipsum dolor sit ameit skado salo smil doliggo',
                    price: 2500,
                    currency: 'egp',
                    offer: true
                }, {
                    img: j2,
                    link: { route: '/product', label: 'quick view' },
                    dec: 'lorem ipsum dolor sit ameit skado salo smil doliggo',
                    price: 2500,
                    currency: 'egp',
                }, {
                    img: j3,
                    link: { route: '/product', label: 'quick view' },
                    dec: 'lorem ipsum dolor sit ameit skado salo smil doliggo',
                    price: 2500,
                    currency: 'egp',
                    offer: true
                }, {
                    img: j4,
                    link: { route: '/product', label: 'quick view' },
                    dec: 'lorem ipsum dolor sit ameit skado salo smil doliggo',
                    price: 2500,
                    currency: 'egp',
                }, {
                    img: j5,
                    link: { route: '/product', label: 'quick view' },
                    dec: 'lorem ipsum dolor sit ameit skado salo smil doliggo',
                    price: 2500,
                    currency: 'egp',
                    offer: true
                }, {
                    img: j6,
                    link: { route: '/product', label: 'quick view' },
                    dec: 'lorem ipsum dolor sit ameit skado salo smil doliggo',
                    price: 2500,
                    currency: 'egp',
                }, {
                    img: j1,
                    link: { route: '/product', label: 'quick view' },
                    dec: 'lorem ipsum dolor sit ameit skado salo smil doliggo',
                    price: 2500,
                    currency: 'egp',
                    offer: true
                }, {
                    img: j2,
                    link: { route: '/product', label: 'quick view' },
                    dec: 'lorem ipsum dolor sit ameit skado salo smil doliggo',
                    price: 2500,
                    currency: 'egp',
                }, {
                    img: j3,
                    link: { route: '/product', label: 'quick view' },
                    dec: 'lorem ipsum dolor sit ameit skado salo smil doliggo',
                    price: 2500,
                    currency: 'egp',
                    offer: true
                }, {
                    img: j4,
                    link: { route: '/product', label: 'quick view' },
                    dec: 'lorem ipsum dolor sit ameit skado salo smil doliggo',
                    price: 2500,
                    currency: 'egp',
                }, {
                    img: j5,
                    link: { route: '/product', label: 'quick view' },
                    dec: 'lorem ipsum dolor sit ameit skado salo smil doliggo',
                    price: 2500,
                    currency: 'egp',
                    offer: true
                }, {
                    img: j6,
                    link: { route: '/product', label: 'quick view' },
                    dec: 'lorem ipsum dolor sit ameit skado salo smil doliggo',
                    price: 2500,
                    currency: 'egp',
                }]
        }
    },
    product: {
        gallery: {
            images: [
                j1, j2, j3, j4
            ]
        },
        info: {
            title: 'skinny fit jeans',
            id: '002563256.2365',
            price: 450,
            currency: 'egp',
            variants: {
                title: 'color',
                choises: [{
                    img: v1,
                    value: "blue"
                }, {
                    img: v2,
                    value: "black"
                }, {
                    img: v2,
                    value: "red"
                }, {
                    img: v1,
                    value: "green"
                }, {
                    img: v1,
                    value: "white"
                }, {
                    img: v2,
                    value: "yellow"
                }, {
                    img: v2,
                    value: "lightblue"
                }, {
                    img: v1,
                    value: "orange"
                }]
            },
            size: {
                fit: [{
                    title: 'waist',
                    choises: [{
                        label: 38,
                        value: 38,
                        out:true
                    }, {
                        label: 42,
                        value: 42,
                        out:true
                    }, {
                        label: 44,
                        value: 44
                    }, {
                        label: 46,
                        value: 46,
                        out:true
                    }, {
                        label: 48,
                        value: 48
                    }, {
                        label: 50,
                        value: 50
                    }, {
                        label: 52,
                        value: 52,
                        out:true
                    }, {
                        label: 54,
                        value: 54
                    }, {
                        label: 58,
                        value: 58
                    }]
                }, {
                    title: 'length',
                    choises: [{
                        label: 100,
                        value: 100,
                        out:true
                    }, {
                        label: 102,
                        value: 102
                    }, {
                        label: 104,
                        value: 104
                    }, {
                        label: 106,
                        value: 106,
                        out:true
                    }, {
                        label: 108,
                        value: 108
                    }, {
                        label: 112,
                        value: 112
                    }]
                }]
            }

        }
    }
}
