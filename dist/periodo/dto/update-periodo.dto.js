"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePeriodoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_periodo_dto_1 = require("./create-periodo.dto");
class UpdatePeriodoDto extends (0, mapped_types_1.PartialType)(create_periodo_dto_1.CreatePeriodoDto) {
}
exports.UpdatePeriodoDto = UpdatePeriodoDto;
//# sourceMappingURL=update-periodo.dto.js.map