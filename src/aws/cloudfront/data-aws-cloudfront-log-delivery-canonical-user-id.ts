// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS CloudFront
*/
export interface DataAwsCloudfrontLogDeliveryCanonicalUserIdConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_log_delivery_canonical_user_id.html#region DataAwsCloudfrontLogDeliveryCanonicalUserId#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_log_delivery_canonical_user_id.html aws_cloudfront_log_delivery_canonical_user_id}
*/
export class DataAwsCloudfrontLogDeliveryCanonicalUserId extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_cloudfront_log_delivery_canonical_user_id";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_log_delivery_canonical_user_id.html aws_cloudfront_log_delivery_canonical_user_id} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsCloudfrontLogDeliveryCanonicalUserIdConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsCloudfrontLogDeliveryCanonicalUserIdConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudfront_log_delivery_canonical_user_id',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // region - computed: false, optional: true, required: false
  private _region?: string | undefined; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      region: cdktf.stringToTerraform(this._region),
    };
  }
}