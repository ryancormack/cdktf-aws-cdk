// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* API Gateway
*/
export interface ApiGatewayDomainNameConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#certificate_arn ApiGatewayDomainName#certificate_arn}
  */
  readonly certificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#certificate_body ApiGatewayDomainName#certificate_body}
  */
  readonly certificateBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#certificate_chain ApiGatewayDomainName#certificate_chain}
  */
  readonly certificateChain?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#certificate_name ApiGatewayDomainName#certificate_name}
  */
  readonly certificateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#certificate_private_key ApiGatewayDomainName#certificate_private_key}
  */
  readonly certificatePrivateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#domain_name ApiGatewayDomainName#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#regional_certificate_arn ApiGatewayDomainName#regional_certificate_arn}
  */
  readonly regionalCertificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#regional_certificate_name ApiGatewayDomainName#regional_certificate_name}
  */
  readonly regionalCertificateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#security_policy ApiGatewayDomainName#security_policy}
  */
  readonly securityPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#tags ApiGatewayDomainName#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#tags_all ApiGatewayDomainName#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * endpoint_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#endpoint_configuration ApiGatewayDomainName#endpoint_configuration}
  */
  readonly endpointConfiguration?: ApiGatewayDomainNameEndpointConfiguration;
  /**
  * mutual_tls_authentication block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#mutual_tls_authentication ApiGatewayDomainName#mutual_tls_authentication}
  */
  readonly mutualTlsAuthentication?: ApiGatewayDomainNameMutualTlsAuthentication;
}
export interface ApiGatewayDomainNameEndpointConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#types ApiGatewayDomainName#types}
  */
  readonly types: string[];
}

export function apiGatewayDomainNameEndpointConfigurationToTerraform(struct?: ApiGatewayDomainNameEndpointConfigurationOutputReference | ApiGatewayDomainNameEndpointConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.types),
  }
}

export class ApiGatewayDomainNameEndpointConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // types - computed: false, optional: false, required: true
  private _types?: string[]; 
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[]) {
    this._types = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types
  }
}
export interface ApiGatewayDomainNameMutualTlsAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#truststore_uri ApiGatewayDomainName#truststore_uri}
  */
  readonly truststoreUri: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#truststore_version ApiGatewayDomainName#truststore_version}
  */
  readonly truststoreVersion?: string;
}

export function apiGatewayDomainNameMutualTlsAuthenticationToTerraform(struct?: ApiGatewayDomainNameMutualTlsAuthenticationOutputReference | ApiGatewayDomainNameMutualTlsAuthentication): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    truststore_uri: cdktf.stringToTerraform(struct!.truststoreUri),
    truststore_version: cdktf.stringToTerraform(struct!.truststoreVersion),
  }
}

export class ApiGatewayDomainNameMutualTlsAuthenticationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // truststore_uri - computed: false, optional: false, required: true
  private _truststoreUri?: string; 
  public get truststoreUri() {
    return this.getStringAttribute('truststore_uri');
  }
  public set truststoreUri(value: string) {
    this._truststoreUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get truststoreUriInput() {
    return this._truststoreUri
  }

  // truststore_version - computed: false, optional: true, required: false
  private _truststoreVersion?: string | undefined; 
  public get truststoreVersion() {
    return this.getStringAttribute('truststore_version');
  }
  public set truststoreVersion(value: string | undefined) {
    this._truststoreVersion = value;
  }
  public resetTruststoreVersion() {
    this._truststoreVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get truststoreVersionInput() {
    return this._truststoreVersion
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html aws_api_gateway_domain_name}
*/
export class ApiGatewayDomainName extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_api_gateway_domain_name";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html aws_api_gateway_domain_name} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayDomainNameConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayDomainNameConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_domain_name',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._certificateArn = config.certificateArn;
    this._certificateBody = config.certificateBody;
    this._certificateChain = config.certificateChain;
    this._certificateName = config.certificateName;
    this._certificatePrivateKey = config.certificatePrivateKey;
    this._domainName = config.domainName;
    this._regionalCertificateArn = config.regionalCertificateArn;
    this._regionalCertificateName = config.regionalCertificateName;
    this._securityPolicy = config.securityPolicy;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._endpointConfiguration = config.endpointConfiguration;
    this._mutualTlsAuthentication = config.mutualTlsAuthentication;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // certificate_arn - computed: false, optional: true, required: false
  private _certificateArn?: string | undefined; 
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }
  public set certificateArn(value: string | undefined) {
    this._certificateArn = value;
  }
  public resetCertificateArn() {
    this._certificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateArnInput() {
    return this._certificateArn
  }

  // certificate_body - computed: false, optional: true, required: false
  private _certificateBody?: string | undefined; 
  public get certificateBody() {
    return this.getStringAttribute('certificate_body');
  }
  public set certificateBody(value: string | undefined) {
    this._certificateBody = value;
  }
  public resetCertificateBody() {
    this._certificateBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateBodyInput() {
    return this._certificateBody
  }

  // certificate_chain - computed: false, optional: true, required: false
  private _certificateChain?: string | undefined; 
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }
  public set certificateChain(value: string | undefined) {
    this._certificateChain = value;
  }
  public resetCertificateChain() {
    this._certificateChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainInput() {
    return this._certificateChain
  }

  // certificate_name - computed: false, optional: true, required: false
  private _certificateName?: string | undefined; 
  public get certificateName() {
    return this.getStringAttribute('certificate_name');
  }
  public set certificateName(value: string | undefined) {
    this._certificateName = value;
  }
  public resetCertificateName() {
    this._certificateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateNameInput() {
    return this._certificateName
  }

  // certificate_private_key - computed: false, optional: true, required: false
  private _certificatePrivateKey?: string | undefined; 
  public get certificatePrivateKey() {
    return this.getStringAttribute('certificate_private_key');
  }
  public set certificatePrivateKey(value: string | undefined) {
    this._certificatePrivateKey = value;
  }
  public resetCertificatePrivateKey() {
    this._certificatePrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatePrivateKeyInput() {
    return this._certificatePrivateKey
  }

  // certificate_upload_date - computed: true, optional: false, required: false
  public get certificateUploadDate() {
    return this.getStringAttribute('certificate_upload_date');
  }

  // cloudfront_domain_name - computed: true, optional: false, required: false
  public get cloudfrontDomainName() {
    return this.getStringAttribute('cloudfront_domain_name');
  }

  // cloudfront_zone_id - computed: true, optional: false, required: false
  public get cloudfrontZoneId() {
    return this.getStringAttribute('cloudfront_zone_id');
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // regional_certificate_arn - computed: false, optional: true, required: false
  private _regionalCertificateArn?: string | undefined; 
  public get regionalCertificateArn() {
    return this.getStringAttribute('regional_certificate_arn');
  }
  public set regionalCertificateArn(value: string | undefined) {
    this._regionalCertificateArn = value;
  }
  public resetRegionalCertificateArn() {
    this._regionalCertificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionalCertificateArnInput() {
    return this._regionalCertificateArn
  }

  // regional_certificate_name - computed: false, optional: true, required: false
  private _regionalCertificateName?: string | undefined; 
  public get regionalCertificateName() {
    return this.getStringAttribute('regional_certificate_name');
  }
  public set regionalCertificateName(value: string | undefined) {
    this._regionalCertificateName = value;
  }
  public resetRegionalCertificateName() {
    this._regionalCertificateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionalCertificateNameInput() {
    return this._regionalCertificateName
  }

  // regional_domain_name - computed: true, optional: false, required: false
  public get regionalDomainName() {
    return this.getStringAttribute('regional_domain_name');
  }

  // regional_zone_id - computed: true, optional: false, required: false
  public get regionalZoneId() {
    return this.getStringAttribute('regional_zone_id');
  }

  // security_policy - computed: true, optional: true, required: false
  private _securityPolicy?: string | undefined; 
  public get securityPolicy() {
    return this.getStringAttribute('security_policy');
  }
  public set securityPolicy(value: string | undefined) {
    this._securityPolicy = value;
  }
  public resetSecurityPolicy() {
    this._securityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyInput() {
    return this._securityPolicy
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // endpoint_configuration - computed: false, optional: true, required: false
  private _endpointConfiguration?: ApiGatewayDomainNameEndpointConfiguration | undefined; 
  private __endpointConfigurationOutput = new ApiGatewayDomainNameEndpointConfigurationOutputReference(this as any, "endpoint_configuration", true);
  public get endpointConfiguration() {
    return this.__endpointConfigurationOutput;
  }
  public putEndpointConfiguration(value: ApiGatewayDomainNameEndpointConfiguration | undefined) {
    this._endpointConfiguration = value;
  }
  public resetEndpointConfiguration() {
    this._endpointConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointConfigurationInput() {
    return this._endpointConfiguration
  }

  // mutual_tls_authentication - computed: false, optional: true, required: false
  private _mutualTlsAuthentication?: ApiGatewayDomainNameMutualTlsAuthentication | undefined; 
  private __mutualTlsAuthenticationOutput = new ApiGatewayDomainNameMutualTlsAuthenticationOutputReference(this as any, "mutual_tls_authentication", true);
  public get mutualTlsAuthentication() {
    return this.__mutualTlsAuthenticationOutput;
  }
  public putMutualTlsAuthentication(value: ApiGatewayDomainNameMutualTlsAuthentication | undefined) {
    this._mutualTlsAuthentication = value;
  }
  public resetMutualTlsAuthentication() {
    this._mutualTlsAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutualTlsAuthenticationInput() {
    return this._mutualTlsAuthentication
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_arn: cdktf.stringToTerraform(this._certificateArn),
      certificate_body: cdktf.stringToTerraform(this._certificateBody),
      certificate_chain: cdktf.stringToTerraform(this._certificateChain),
      certificate_name: cdktf.stringToTerraform(this._certificateName),
      certificate_private_key: cdktf.stringToTerraform(this._certificatePrivateKey),
      domain_name: cdktf.stringToTerraform(this._domainName),
      regional_certificate_arn: cdktf.stringToTerraform(this._regionalCertificateArn),
      regional_certificate_name: cdktf.stringToTerraform(this._regionalCertificateName),
      security_policy: cdktf.stringToTerraform(this._securityPolicy),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      endpoint_configuration: apiGatewayDomainNameEndpointConfigurationToTerraform(this._endpointConfiguration),
      mutual_tls_authentication: apiGatewayDomainNameMutualTlsAuthenticationToTerraform(this._mutualTlsAuthentication),
    };
  }
}