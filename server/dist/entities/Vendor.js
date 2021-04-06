"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vendor = void 0;
const core_1 = require("@mikro-orm/core");
const type_graphql_1 = require("type-graphql");
const uuid_1 = require("uuid");
const User_1 = require("./User");
let Vendor = class Vendor {
    constructor() {
        this.uuid = uuid_1.v4();
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
    format() {
        return __awaiter(this, void 0, void 0, function* () {
            this.value = this.name.toLowerCase();
            this.value = this.value.replace(/[^a-zA-Z ]/g, "");
            this.value = this.value.replace(/ /, "");
        });
    }
};
__decorate([
    type_graphql_1.Field(),
    core_1.PrimaryKey(),
    __metadata("design:type", String)
], Vendor.prototype, "uuid", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    core_1.Property({ type: "date" }),
    __metadata("design:type", Object)
], Vendor.prototype, "createdAt", void 0);
__decorate([
    type_graphql_1.Field(),
    core_1.Property(),
    __metadata("design:type", Number)
], Vendor.prototype, "createdById", void 0);
__decorate([
    type_graphql_1.Field(() => User_1.User),
    core_1.ManyToOne({ entity: () => User_1.User }),
    __metadata("design:type", User_1.User)
], Vendor.prototype, "createdBy", void 0);
__decorate([
    type_graphql_1.Field(),
    core_1.Property(),
    __metadata("design:type", Number)
], Vendor.prototype, "modifiedById", void 0);
__decorate([
    type_graphql_1.Field(() => User_1.User),
    core_1.ManyToOne({ entity: () => User_1.User }),
    __metadata("design:type", User_1.User)
], Vendor.prototype, "modifiedBy", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    core_1.Property({ type: "date", onUpdate: () => new Date() }),
    __metadata("design:type", Object)
], Vendor.prototype, "updatedAt", void 0);
__decorate([
    type_graphql_1.Field(),
    core_1.Property({ type: "text" }),
    __metadata("design:type", String)
], Vendor.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    core_1.Property({ type: "text", unique: true }),
    __metadata("design:type", String)
], Vendor.prototype, "value", void 0);
__decorate([
    core_1.BeforeCreate(),
    core_1.BeforeUpdate(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Vendor.prototype, "format", null);
Vendor = __decorate([
    type_graphql_1.ObjectType(),
    core_1.Entity()
], Vendor);
exports.Vendor = Vendor;
//# sourceMappingURL=Vendor.js.map