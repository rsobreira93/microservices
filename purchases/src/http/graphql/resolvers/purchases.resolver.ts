import { UseGuards } from '@nestjs/common';
import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { ProductService } from 'src/services/product.service';
import { PurchasesService } from '../../../services/purchases.service';
import { AuthorizationGuard } from '../../auth/authorization.guard';
import { Product } from '../models/product';
import { Purchase } from '../models/purchase';

@Resolver(() => Purchase)
export class PurchaseResolver {
  constructor(
    private purchaseService: PurchasesService,
    private productsService: ProductService,
  ) {}

  @Query(() => [Purchase])
  @UseGuards(AuthorizationGuard)
  purchases() {
    return this.purchaseService.listAllPurchases();
  }

  @ResolveField(() => Product)
  product(@Parent() purchase: Purchase) {
    return this.productsService.getProductById(purchase.productId);
  }
}
