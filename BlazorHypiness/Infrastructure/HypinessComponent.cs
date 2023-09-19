using BlazorHypiness.Utilities;
using Microsoft.AspNetCore.Components;

namespace BlazorHypiness.Infrastructure;
public abstract class HypinessComponent : ComponentBase
{
	private string? compiledCss;

	protected string CompiledCss { get => compiledCss ??= BuildCss(new CssBuilder( )).Build( ); }

	protected override void OnParametersSet( )
	{
		compiledCss = null;
		base.OnParametersSet( );
	}

	protected virtual CssBuilder BuildCss(CssBuilder builder) => builder;
}
