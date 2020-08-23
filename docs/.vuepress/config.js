module.exports= {
    title: 'Matter.js',
    description: "用 JavaScript 编写的 2D 物理引擎。它是一个计算机程序，使用质量、速度、摩擦力和空气阻力等变量，模拟了一个近似真实的物理系统，为刚性物体赋予真实的物理效果，比如重力、旋转和碰撞等效果，让物体的行为表现的更加趋向真实。",
    base: "/matterjs_docs_zh_cn/",
    markdown: {
        lineNumbers: true,
        anchor: {
            permalink: false
        }
    },
    themeConfig: {
        activeHeaderLinks: true,
        displayAllHeaders: false,
        nav: [
            // {
            //     text: "主站",
            //     link: "http://febeacon.com"
            // },
            {
                text: "文档首页",
                link: "/"
            }
        ],
        sidebar: [
            {
                title: 'Engine',
                path: '/routes/Engine',
                sidebarDepth: 2
            },
            {
                title: 'World',
                path: 'routes/World',
                sidebarDepth: 2
            },
            {
                title: 'Body',
                path: 'routes/Body',
                sidebarDepth: 2
            },
            {
                title: 'Bodies',
                path: 'routes/Bodies',
                sidebarDepth: 2
            },
            {
                title: "Composite",
                path: 'routes/Composite',
                sidebarDepth: 2
            },
            {
                title: "Composites",
                path: 'routes/Composites',
                sidebarDepth: 2
            },
            {
                title: "Constraint",
                path: 'routes/Constraint',
                sidebarDepth: 2
            },
            {
                title: "MouseConstraint",
                path: 'routes/MouseConstraint',
                sidebarDepth: 2
            },
            {
                title: "Events",
                path: 'routes/Events',
                sidebarDepth: 2
            },
            {
                title: "Plugin",
                path: 'routes/Plugin',
                sidebarDepth: 2
            },
            {
                title: "Axes",
                path: 'routes/Axes',
                sidebarDepth: 2
            },
            {
                title: "Bounds",
                path: 'routes/Bounds',
                sidebarDepth: 2
            },
            {
                title: "Common",
                path: 'routes/Common',
                sidebarDepth: 2
            },
            {
                title: "Contact",
                path: 'routes/Contact',
                sidebarDepth: 2
            },
            {
                title: "Detector",
                path: 'routes/Detector',
                sidebarDepth: 2
            },
            {
                title: "Grid",
                path: 'routes/Grid',
                sidebarDepth: 2
            },
            {
                title: "Matter",
                path: 'routes/Matter',
                sidebarDepth: 2
            },
            {
                title: "Mouse",
                path: 'routes/Mouse',
                sidebarDepth: 2
            },
            {
                title: "Pair",
                path: 'routes/Pair',
                sidebarDepth: 2
            },
            {
                title: "Pairs",
                path: 'routes/Pairs',
                sidebarDepth: 2
            },
            {
                title: "Query",
                path: 'routes/Query',
                sidebarDepth: 2
            },
            {
                title: "Render",
                path: 'routes/Render',
                sidebarDepth: 2
            },
            {
                title: "RenderPixi",
                path: 'routes/RenderPixi',
                sidebarDepth: 2
            },
            {
                title: "Resolver",
                path: 'routes/Resolver',
                sidebarDepth: 2
            },
            {
                title: "Runner",
                path: 'routes/Runner',
                sidebarDepth: 2
            },
            {
                title: "SAT",
                path: 'routes/SAT',
                sidebarDepth: 2
            },
            {
                title: "Sleeping",
                path: 'routes/Sleeping',
                sidebarDepth: 2
            },
            {
                title: "Svg",
                path: 'routes/Svg',
                sidebarDepth: 2
            },
            {
                title: "Vector",
                path: 'routes/Vector',
                sidebarDepth: 2
            },
            {
                title: "Vertices",
                path: 'routes/Vertices',
                sidebarDepth: 2
            }
        ]
    },
    head: [
        ["link", {
            rel: "icon", href: "/images/matterjs_favicon.png"
        }]
    ]
}