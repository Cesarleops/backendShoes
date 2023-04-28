"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("../routes/users"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("../db");
class Server {
    constructor() {
        this.paths = {
            users: '/kicks/users'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        this.connectDb();
        this.middlewares();
        this.routes();
    }
    async connectDb() {
        try {
            await db_1.db.authenticate();
            console.log('Connection has been established successfully.');
        }
        catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static('public'));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`server is running at ${process.env.PORT}`);
        });
    }
    routes() {
        this.app.use(this.paths.users, users_1.default);
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map