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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
exports.VendorResolver = exports.VendorResponse = void 0;
const Vendor_1 = require("../entities/Vendor");
const type_graphql_1 = require("type-graphql");
const users_1 = require("./users");
const Authenticate_1 = require("../middleware/Authenticate");
let VendorResponse = class VendorResponse {
};
__decorate([
    type_graphql_1.Field(() => [users_1.FieldError], { nullable: true }),
    __metadata("design:type", Array)
], VendorResponse.prototype, "errors", void 0);
__decorate([
    type_graphql_1.Field(() => Vendor_1.Vendor, { nullable: true }),
    __metadata("design:type", Vendor_1.Vendor)
], VendorResponse.prototype, "vendor", void 0);
VendorResponse = __decorate([
    type_graphql_1.ObjectType()
], VendorResponse);
exports.VendorResponse = VendorResponse;
let VendorResolver = class VendorResolver {
    vendors({ em }) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = em.getConnection();
            const result = (yield conn.execute(`select v.*, json_build_object('username', u.username) "createdBy", json_build_object('username', z.username) "modifiedBy" from vendor v left join public.user u on u.id = v.created_by_id inner join public.user z on z.id = v.modified_by_id
    `));
            console.log(result);
            const vendors = result.map((v) => em.map(Vendor_1.Vendor, v));
            return vendors;
        });
    }
    vendor(uuid, { em }) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = em.getConnection();
            const result = yield conn.execute(`select v.*, json_build_object('username', u.username) "createdBy", json_build_object('username', z.username) "modifiedBy" from vendor v left join public.user u on u.id = v.created_by_id inner join public.user z on z.id = v.modified_by_id where v.uuid = '${uuid}'
    `);
            const vendor = result.map((v) => em.map(Vendor_1.Vendor, v));
            return vendor[0];
        });
    }
    createVendor(name, { em, req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const vendor = em.create(Vendor_1.Vendor, {
                name,
                modifiedById: req.session.userId,
                createdById: req.session.userId,
            });
            try {
                yield em.persistAndFlush(vendor);
            }
            catch (err) {
                console.log(err);
                if (err.code === "23505" && err.constraint === "vendor_name_unique") {
                    return {
                        errors: [{ field: "name", message: "Vendor already exists" }],
                    };
                }
            }
            return { vendor };
        });
    }
    updateVendor(uuid, name, { em, req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const vendor = yield em.findOne(Vendor_1.Vendor, { uuid });
            if (!vendor) {
                return null;
            }
            if (name) {
                vendor.name = name;
                vendor.modifiedById = req.session.userId;
                yield em.persistAndFlush(vendor);
            }
            return vendor;
        });
    }
    deleteVendor(uuid, { em }) {
        return __awaiter(this, void 0, void 0, function* () {
            const vendor = yield em.findOne(Vendor_1.Vendor, { uuid });
            if (!vendor) {
                return null;
            }
            yield em.nativeDelete(Vendor_1.Vendor, { uuid });
            return vendor;
        });
    }
};
__decorate([
    type_graphql_1.Query(() => [Vendor_1.Vendor]),
    __param(0, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VendorResolver.prototype, "vendors", null);
__decorate([
    type_graphql_1.Query(() => Vendor_1.Vendor, { nullable: true }),
    __param(0, type_graphql_1.Arg("uuid")), __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], VendorResolver.prototype, "vendor", null);
__decorate([
    type_graphql_1.Mutation(() => VendorResponse),
    type_graphql_1.UseMiddleware(Authenticate_1.Authenticate),
    __param(0, type_graphql_1.Arg("name")),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], VendorResolver.prototype, "createVendor", null);
__decorate([
    type_graphql_1.Mutation(() => Vendor_1.Vendor, { nullable: true }),
    type_graphql_1.UseMiddleware(Authenticate_1.Authenticate),
    __param(0, type_graphql_1.Arg("uuid")),
    __param(1, type_graphql_1.Arg("name", { nullable: true })),
    __param(2, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], VendorResolver.prototype, "updateVendor", null);
__decorate([
    type_graphql_1.Mutation(() => Vendor_1.Vendor, { nullable: true }),
    type_graphql_1.UseMiddleware(Authenticate_1.Authenticate),
    __param(0, type_graphql_1.Arg("uuid")), __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], VendorResolver.prototype, "deleteVendor", null);
VendorResolver = __decorate([
    type_graphql_1.Resolver()
], VendorResolver);
exports.VendorResolver = VendorResolver;
//# sourceMappingURL=vendors.js.map