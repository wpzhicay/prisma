"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TituloService = void 0;
const common_1 = require("@nestjs/common");
let TituloService = class TituloService {
    create(createTituloDto) {
        return 'This action adds a new titulo';
    }
    findAll() {
        return `This action returns all titulo`;
    }
    findOne(id) {
        return `This action returns a #${id} titulo`;
    }
    update(id, updateTituloDto) {
        return `This action updates a #${id} titulo`;
    }
    remove(id) {
        return `This action removes a #${id} titulo`;
    }
};
exports.TituloService = TituloService;
exports.TituloService = TituloService = __decorate([
    (0, common_1.Injectable)()
], TituloService);
//# sourceMappingURL=titulo.service.js.map