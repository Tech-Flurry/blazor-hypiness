using BlazorHypiness.Utilities;
using Microsoft.AspNetCore.Components;

namespace BlazorHypiness.Infrastructure;
public abstract class HypinessComponent : ComponentBase
{
	protected virtual string BuildCss(CssBuilder builder) => builder.Build( );
}
