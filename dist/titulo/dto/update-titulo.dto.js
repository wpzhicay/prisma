"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTituloDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_titulo_dto_1 = require("./create-titulo.dto");
class UpdateTituloDto extends (0, mapped_types_1.PartialType)(create_titulo_dto_1.CreateTituloDto) {
}
exports.UpdateTituloDto = UpdateTituloDto;
//# sourceMappingURL=update-titulo.dto.js.map