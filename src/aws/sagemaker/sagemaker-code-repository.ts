// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS SageMaker
*/
export interface SagemakerCodeRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_code_repository.html#code_repository_name SagemakerCodeRepository#code_repository_name}
  */
  readonly codeRepositoryName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_code_repository.html#tags SagemakerCodeRepository#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_code_repository.html#tags_all SagemakerCodeRepository#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * git_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_code_repository.html#git_config SagemakerCodeRepository#git_config}
  */
  readonly gitConfig: SagemakerCodeRepositoryGitConfig;
}
export interface SagemakerCodeRepositoryGitConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_code_repository.html#branch SagemakerCodeRepository#branch}
  */
  readonly branch?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_code_repository.html#repository_url SagemakerCodeRepository#repository_url}
  */
  readonly repositoryUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_code_repository.html#secret_arn SagemakerCodeRepository#secret_arn}
  */
  readonly secretArn?: string;
}

export function sagemakerCodeRepositoryGitConfigToTerraform(struct?: SagemakerCodeRepositoryGitConfigOutputReference | SagemakerCodeRepositoryGitConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    repository_url: cdktf.stringToTerraform(struct!.repositoryUrl),
    secret_arn: cdktf.stringToTerraform(struct!.secretArn),
  }
}

export class SagemakerCodeRepositoryGitConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // branch - computed: false, optional: true, required: false
  private _branch?: string | undefined; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string | undefined) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch
  }

  // repository_url - computed: false, optional: false, required: true
  private _repositoryUrl?: string; 
  public get repositoryUrl() {
    return this.getStringAttribute('repository_url');
  }
  public set repositoryUrl(value: string) {
    this._repositoryUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryUrlInput() {
    return this._repositoryUrl
  }

  // secret_arn - computed: false, optional: true, required: false
  private _secretArn?: string | undefined; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string | undefined) {
    this._secretArn = value;
  }
  public resetSecretArn() {
    this._secretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_code_repository.html aws_sagemaker_code_repository}
*/
export class SagemakerCodeRepository extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_sagemaker_code_repository";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_code_repository.html aws_sagemaker_code_repository} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerCodeRepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerCodeRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_code_repository',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._codeRepositoryName = config.codeRepositoryName;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._gitConfig = config.gitConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // code_repository_name - computed: false, optional: false, required: true
  private _codeRepositoryName?: string; 
  public get codeRepositoryName() {
    return this.getStringAttribute('code_repository_name');
  }
  public set codeRepositoryName(value: string) {
    this._codeRepositoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRepositoryNameInput() {
    return this._codeRepositoryName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // git_config - computed: false, optional: false, required: true
  private _gitConfig?: SagemakerCodeRepositoryGitConfig; 
  private __gitConfigOutput = new SagemakerCodeRepositoryGitConfigOutputReference(this as any, "git_config", true);
  public get gitConfig() {
    return this.__gitConfigOutput;
  }
  public putGitConfig(value: SagemakerCodeRepositoryGitConfig) {
    this._gitConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gitConfigInput() {
    return this._gitConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      code_repository_name: cdktf.stringToTerraform(this._codeRepositoryName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      git_config: sagemakerCodeRepositoryGitConfigToTerraform(this._gitConfig),
    };
  }
}